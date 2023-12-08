import { Injectable } from '@nestjs/common';
import { OrderItemService } from '../orderItem/orderItem.service';
import { ProductType } from '../orderItem/dtos/product';
import { CourseService } from '../course/course.service';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { InProduct } from 'src/shared/in-product.dto';
import { InPaginatedDto } from 'src/dtos/in-paginated.dto';
import { OutGetShopCoursesDto } from './dtos/out-get-shop-courses.dto';
import { ShopCourseDao } from './daos/shop-course.dao';

@Injectable()
export class CartService {
  constructor(
    private readonly orderItemService: OrderItemService,
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
    const orderItems = await this.orderItemService.getByUserId(userId);
    const courseProducts: InProduct[] = await Promise.all(
      orderItems
        .filter((orderItem) => orderItem.product.type === ProductType.COURSE)
        .map((orderItem) =>
          this.courseService.getCourseProduct(orderItem.product.id),
        ),
    );

    return {
      cart: courseProducts.map((product, index) => ({
        count: orderItems[index].count,
        product: {
          images: product.getImages(),
          type: product.getType(),
          price: product.getPrice(),
          detail: product.getDetails(),
        },
        overallPrice: orderItems[index].count * product.getPrice(),
      })),
    };
  }

  private async pruneInvalidCartItems(userId: string) {
    const orderItems = await this.orderItemService.getByUserId(userId);
    const toPruneCourses = await Promise.all(
      orderItems
        .filter((orderItem) => orderItem.product.type === ProductType.COURSE)
        .map(
          async (courseItem) =>
            !(await this.courseService.isAvailable(courseItem.product.id)),
        ),
    );
    await this.orderItemService.softDeleteMany(
      orderItems
        .filter((orderItem) => orderItem.product.type === ProductType.COURSE)
        .filter((_, index) => toPruneCourses[index])
        .map((course) => course.id),
    );
  }
}
