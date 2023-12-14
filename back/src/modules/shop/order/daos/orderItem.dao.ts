import { TypeOrderItemDto } from '../dtos/type-orderItem.dto';
import { OrderItem } from '../orderItem.schema';

export abstract class OrderItemDao {
  static convertOne = (orderItem: MongoDoc<OrderItem>): TypeOrderItemDto => ({
    id: orderItem._id.toString(),
    orderId: orderItem.orderId.toString(),
    title: orderItem.title,
    productType: orderItem.productType,
    productId: orderItem.productId.toString(),
    price: orderItem.price,
    quantity: orderItem.quantity,
    images: orderItem.images,
    detail: orderItem.detail,
  });
}
