import { InProduct, OutProduct } from '../shop.entity';
import { ID_JOIN_STR, MAX_COURSE_QUANTITY_TO_BUY } from 'src/configs/statics';

export abstract class ShopProductDao {
  static convertOne = (product: InProduct): OutProduct => ({
    ...product,
    id: `${product.type}${ID_JOIN_STR}${product.id}`,
    maxQuantity: MAX_COURSE_QUANTITY_TO_BUY,
  });
}
