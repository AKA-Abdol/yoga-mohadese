import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { OrderRepo } from './order.repo';
import { OrderItemRepo } from './orderItem.repo';
import { TypeCart } from '../cart/dtos/type-cart.dto';
import mongoose from 'mongoose';
import { InProduct } from '../shop.entity';
import { OrderDao } from './daos/order.dao';
import { OrderItemDao } from './daos/orderItem.dao';
import { OutGetOrderDto } from './dtos/out-get-order.dto';
import { InGetOrdersQueryDto } from './dtos/in-get-orders.dto';
import { OutGetOrdersDto } from './dtos/out-get-orders.dto';
import { PaymentService } from 'src/payment/payment.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepo,
    private readonly orderItemRepo: OrderItemRepo,
    private readonly paymentService: PaymentService,
  ) {}

  async createOrder(
    userId: string,
    cart: TypeCart[],
    products: InProduct[],
    paymentId: string,
  ) {
    const order = await this.orderRepo.create({
      userId: new mongoose.Types.ObjectId(userId),
      paymentId: new mongoose.Types.ObjectId(paymentId),
    });
    if (order === null)
      throw new InternalServerErrorException('مشکلی در سرور رخ داده است');

    const items = await Promise.all(
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
    return OrderDao.convertOne(order, items);
  }

  async getOrders(
    userId: string,
    input: InGetOrdersQueryDto,
  ): Promise<OutGetOrdersDto> {
    const orders = await this.orderRepo.getPaginated(
      input.num,
      (input.page - 1) * input.num,
    );
    const items = await Promise.all(
      orders.values.map((order) => this.orderItemRepo.getByOrderId(order._id)),
    );
    return {
      count: orders.count,
      data: orders.values.map((order, index) =>
        OrderDao.convertOne(order, items[index]),
      ),
    };
  }

  async getOrder(orderId: string, userId: string): Promise<OutGetOrderDto> {
    if (!mongoose.Types.ObjectId.isValid(orderId))
      throw new NotFoundException('سفارش یافت نشد');

    const order = await this.orderRepo.findOne(
      new mongoose.Types.ObjectId(orderId),
    );
    if (order === null || !order.userId.equals(userId))
      throw new NotFoundException('سفارش یافت نشد');

    const orderItems = await this.orderItemRepo.getByOrderId(
      new mongoose.Types.ObjectId(orderId),
    );

    const payment = await this.paymentService.getOne(
      order.paymentId.toString(),
    );
    return {
      createdAt: order.createdAt ?? new Date(),
      payment,
      items: orderItems.map(OrderItemDao.convertOne),
    };
  }
}
