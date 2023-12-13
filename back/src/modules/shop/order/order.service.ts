import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OrderRepo } from './order.repo';
import { OrderItemRepo } from './orderItem.repo';
import { PaymentType } from './order.schema';
import { TypeCart } from '../cart/dtos/type-cart.dto';
import mongoose from 'mongoose';
import { InProduct } from '../shop.entity';
import { OrderDao } from './daos/order.dao';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepo,
    private readonly orderItemRepo: OrderItemRepo,
  ) {}

  async createOrder(
    userId: string,
    cart: TypeCart[],
    products: InProduct[],
    paymentType: PaymentType = PaymentType.ONLINE,
  ) {
    const order = await this.orderRepo.create({
      userId: new mongoose.Types.ObjectId(userId),
      paymentType,
    });
    if (order === null)
      throw new InternalServerErrorException('مشکلی در سرور رخ داده است');

    await Promise.all(
      cart.map((cartItem, index) => {
        const product = products[index];
        return this.orderItemRepo.create({
          orderId: order._id,
          productId: cartItem.product.id,
          productType: cartItem.product.type,
          quantity: cartItem.quantity,
          images: product.images,
          price: product.price,
          title: product.title,
          detail: {
            start_date: product.detail.start_date,
            end_date: product.detail.end_date,
            level: product.detail.level,
          },
        });
      }),
    );

    return OrderDao.convertOne(order);
  }
}
