import { ApiProperty } from '@nestjs/swagger';
import { OutProduct } from '../shop.entity';

// class OutGetCartItemProduct {
//   @ApiProperty({ required: true, default: 'Course' })
//   type: ProductType;

//   @ApiProperty({ required: true, default: 98000 })
//   price: number;

//   @ApiProperty({
//     required: true,
//     default: ['thumbnail_link_1', 'thumbnail_link_2'],
//   })
//   images: string[];

//   @ApiProperty({
//     required: true,
//     default: { start_date: new Date(), end_date: new Date() },
//   })
//   detail: any;
// }

export class OutGetCartItem {
  @ApiProperty({ required: true, default: 2 })
  quantity: number;

  @ApiProperty({ required: true, default: 196000 })
  overallPrice: number;

  @ApiProperty({ required: true })
  product: OutProduct;
}

export type OutGetCartDto = OutGetCartItem[];
