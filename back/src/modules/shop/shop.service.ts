import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { InPaginatedDto } from 'src/dtos/in-paginated.dto';
import { OutGetShopCoursesDto } from './dtos/out-get-shop-courses.dto';
import { CartService } from './cart/cart.service';
import {
  OutCourseProduct,
  OutProduct,
  ProductIdentifier,
  ProductType,
} from './shop.entity';
import { InAddItemBodyDto } from './dtos/in-add-item.dto';
import { ID_JOIN_STR } from 'src/configs/statics';
import mongoose from 'mongoose';
import { OutAddItemDto } from './dtos/out-add-item.dto';
import { InCompleteOrderQueryDto } from './dtos/in-complete-order.dto';
import { OrderService } from './order/order.service';
import { InjectConnection } from '@nestjs/mongoose';
import { InDeleteItemBodyDto } from './dtos/in-delete-item.dto';
import { ShopProductDao } from './daos/shop-product.dao';
import { OutGetProduct } from './dtos/out-get-product.dto';
import { InGetOrdersQueryDto } from './order/dtos/in-get-orders.dto';

@Injectable()
export class ShopService {
  constructor(
    private readonly cartService: CartService,
    private readonly courseService: CourseService,
    private readonly orderService: OrderService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async getShopCourses(
    pagination: InPaginatedDto,
    userId: string,
  ): Promise<OutGetShopCoursesDto> {
    const paginatedCourses = await this.courseService.getCoursesWithVideos(
      pagination,
    );
    const accessedCourses =
      await this.courseService.getAccessedCourseIdsByUserId(userId);
    return {
      count: paginatedCourses.count,
      courses: paginatedCourses.courses.map((course) => ({
        ...ShopProductDao.convertOne(course),
        hasAccess: accessedCourses.includes(course.id.toString()),
      })),
    };
  }

  async getCart(userId: string): Promise<OutGetCartDto> {
    await this.pruneInvalidCartItems(userId);
    const cart = await this.cartService.getByUserId(userId);
    const courseProducts = await Promise.all(
      cart
        .filter((cartItem) => cartItem.product.type === ProductType.COURSE)
        .map((courseItem) =>
          this.courseService.getCourseProduct(courseItem.product.id),
        ),
    );

    return courseProducts.map((product, index) => ({
      quantity: cart[index].quantity,
      product: ShopProductDao.convertOne(product),
      overallPrice: cart[index].quantity * product.price,
    }));
  }

  private async pruneInvalidCartItems(userId: string) {
    const cart = await this.cartService.getByUserId(userId);
    const toPruneCourses = await Promise.all(
      cart
        .filter((cartItem) => cartItem.product.type === ProductType.COURSE)
        .map(
          async (courseItem) =>
            !(await this.courseService.isAvailable(courseItem.product.id)),
        ),
    );
    await this.cartService.softDeleteMany(
      cart
        .filter((cartItem) => cartItem.product.type === ProductType.COURSE)
        .filter((_, index) => toPruneCourses[index])
        .map((course) => course.id),
    );
  }

  async addItem(userId: string, productId: string): Promise<OutAddItemDto> {
    const { id, type } = this.identifyProduct(productId);
    switch (type) {
      case ProductType.COURSE:
        return this.addCourseOrder(userId, id);
      default:
        throw new BadRequestException('محصول مورد نظر وجود ندارد');
    }
  }

  private identifyProduct(productId: string): ProductIdentifier<string> {
    const [type, id, ...rest] = productId.split(ID_JOIN_STR);
    if (rest.length !== 0 || !mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException('محصول مورد نظر وجود ندارد');
    return {
      id: new mongoose.Types.ObjectId(id),
      type,
    };
  }

  async deleteItem(userId: string, productId: string) {
    const { id, type } = this.identifyProduct(productId);
    if (type !== ProductType.COURSE)
      throw new BadRequestException('محصول مورد نظر وجود ندارد');
    return this.cartService.decreaseCartItemQuantity(userId, id.toString());
  }

  private async addCourseOrder(
    userId: string,
    courseId: mongoose.Types.ObjectId,
  ): Promise<OutAddItemDto> {
    if (await this.cartService.hasCartItem(userId, courseId.toString()))
      throw new ConflictException('این کورس قبلا در سبد خرید شما بوده است');

    await this.courseService.getCourseProduct(courseId); // if course exists

    if (await this.courseService.hasUserAccess(userId, courseId.toString()))
      throw new ConflictException('به این کورس از قبل دسترسی دارید');

    await this.cartService.add(userId, {
      id: courseId,
      type: ProductType.COURSE,
    });
    return { itemId: courseId.toString(), quantity: 1 };
  }

  async submitOrder(userId: string) {
    const cart = await this.cartService.getByUserId(userId);
    if (cart.length === 0)
      throw new BadRequestException('سبد خرید شما خالی است');
    // needs to put data in redis for submitting and creating redirect to payment and redirect back
  }

  async createOrder(input: InCompleteOrderQueryDto) {
    const cart = (await this.cartService.getByUserId(input.userId)).filter(
      (cartItem) => cartItem.product.type === ProductType.COURSE,
    );
    const products = await Promise.all(
      cart.map((courseItem) =>
        this.courseService.getCourseProduct(courseItem.product.id),
      ),
    );
    const transactionSession = await this.connection.startSession();
    transactionSession.startTransaction();
    try {
      const order = await this.orderService.createOrder(
        input.userId,
        cart,
        products,
      );
      await this.cartService.emptyCart(input.userId);
      await this.courseService.createAccessForUser(
        input.userId,
        products.map((product) => product.id.toString()),
      );
      return order;
    } catch (error) {
      transactionSession.abortTransaction();
      throw error;
    } finally {
      transactionSession.endSession();
    }
  }

  async getProduct(productId: string, userId: string): Promise<OutGetProduct> {
    const { id, type } = this.identifyProduct(productId);
    if (type !== ProductType.COURSE)
      throw new NotFoundException('محصول مورد نظر یافت نشد');

    const accessedCourses =
      await this.courseService.getAccessedCourseIdsByUserId(userId);

    const product = await this.getCourseProduct(id);
    return {
      ...product,
      hasAccess: accessedCourses.includes(id.toString()),
    };
  }

  private async getCourseProduct(
    courseId: mongoose.Types.ObjectId,
  ): Promise<OutCourseProduct> {
    const courseProduct = await this.courseService.getCourseProduct(courseId);
    return ShopProductDao.convertOne(courseProduct);
  }

  async getOrders(userId: string, input: InGetOrdersQueryDto) {
    return this.orderService.getOrders(userId, input);
  }

  async getOrder(orderId: string, userId: string) {
    return this.orderService.getOrder(orderId, userId);
  }
}
