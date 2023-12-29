import { TypeOrderDto } from '../dtos/type-order.dto';
import { Order } from '../order.schema';
import { OrderItem } from '../orderItem.schema';
import { OrderItemAbstractDao } from './orderItem-abstract.dao';

export abstract class OrderDao {
  static convertOne = (
    order: MongoDoc<Order>,
    items: MongoDoc<OrderItem>[],
  ): TypeOrderDto => ({
    id: order._id.toString(),
    createdAt: order.createdAt ?? new Date(),
    userId: order.userId.toString(),
    items: items.map(OrderItemAbstractDao.convertOne),
    paymentAmount: items.reduce(
      (agg, item) => agg + item.price * item.quantity,
      0,
    ),
  });
}
