import { TypeOrderDto } from '../dtos/type-order.dto';
import { Order } from '../order.schema';

export abstract class OrderDao {
  static convertOne = (order: MongoDoc<Order>): TypeOrderDto => ({
    id: order._id.toString(),
    userId: order.userId.toString(),
    createdAt: order.createdAt,
  });
}
