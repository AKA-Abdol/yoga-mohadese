import { TypeOrderItemDto } from '../dtos/type-orderItem.dto';
import { OrderItem } from '../cart.schema';

export abstract class OrderItemDao {
  static convertOne = (model: MongoDoc<OrderItem>): TypeOrderItemDto => ({
    id: model._id,
    userId: model.userId,
    product: {
      type: model.productType,
      id: model.productId,
    },
    count: model.count,
  });
}
