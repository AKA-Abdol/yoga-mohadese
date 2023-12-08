import { Cart } from '../cart.schema';
import { TypeCart } from '../dtos/type-cart.dto';

export abstract class CartDao {
  static convertOne = (model: MongoDoc<Cart>): TypeCart => ({
    id: model._id,
    userId: model.userId,
    product: {
      type: model.productType,
      id: model.productId,
    },
    count: model.count,
  });
}
