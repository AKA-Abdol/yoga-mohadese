import { TypeOrderItemAbstractDto } from '../dtos/type-order-item-abstract.dto';
import { OrderItem } from '../orderItem.schema';

export abstract class OrderItemAbstractDao {
  static convertOne = (
    courseItem: MongoDoc<OrderItem>,
  ): TypeOrderItemAbstractDto => ({
    image: courseItem.images[0] ?? '',
    title: courseItem.title,
  });
}
