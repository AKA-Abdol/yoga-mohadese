import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { InPaginatedDto } from 'src/dtos/in-paginated.dto';
import { OutGetShopCoursesDto } from './dtos/out-get-shop-courses.dto';
import { ShopCourseDao } from './daos/shop-course.dao';
import { CartService } from './cart/cart.service';
import { ProductIdentifier, ProductType } from './shop.entity';
import { InAddItemBodyDto } from './dtos/in-add-item.dto';
import { ID_JOIN_STR } from 'src/confings/statics';
import mongoose from 'mongoose';
import { OutAddItemDto } from './dtos/out-add-item.dto';

@Injectable()
export class ShopService {
  constructor(
    private readonly cartService: CartService,
    private readonly courseService: CourseService,
  ) {}

  async getShopCourses(
    pagination: InPaginatedDto,
  ): Promise<OutGetShopCoursesDto> {
    const paginatedCourses = await this.courseService.getCourses(pagination);
    return {
      count: paginatedCourses.count,
      courses: paginatedCourses.courses.map(ShopCourseDao.convertOne),
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
      count: cart[index].count,
      product: {
        images: product.images,
        type: product.type,
        price: product.price,
        detail: product.detail,
      },
      overallPrice: cart[index].count * product.price,
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

  async addItem(
    userId: string,
    input: InAddItemBodyDto,
  ): Promise<OutAddItemDto> {
    const { id, type } = this.identifyProduct(input.itemId);
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

  private async addCourseOrder(
    userId: string,
    courseId: mongoose.Types.ObjectId,
  ): Promise<OutAddItemDto> {
    if (await this.cartService.hasOrderItem(userId, courseId.toString()))
      throw new ConflictException('این کورس قبلا در سبد خرید شما بوده است');

    await this.courseService.getCourseProduct(courseId); // if course exists

    await this.cartService.add(userId, {
      id: courseId,
      type: ProductType.COURSE,
    });

    return { itemId: courseId.toString(), quantity: 1 };
  }
}
