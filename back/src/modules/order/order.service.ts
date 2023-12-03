import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { OrderItemService } from './orderItem/orderItem.service';
import { ProductType } from './orderItem/dtos/product';
import { CourseService } from '../course/course.service';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { InProduct } from 'src/shared/in-product.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderItemService: OrderItemService,
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: CourseService,
  ) {}

  async getCart(userId: string): Promise<OutGetCartDto> {
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
}
