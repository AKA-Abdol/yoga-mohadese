import { ApiProperty } from '@nestjs/swagger';
import { ProductType } from '../shop.entity';

class OutGetCartItemProduct {
  @ApiProperty({ required: true, default: 'Course' })
  type: ProductType;

  @ApiProperty({ required: true, default: 98000 })
  price: number;

  @ApiProperty({
    required: true,
    default: ['thumbnail_link_1', 'thumbnail_link_2'],
  })
  images: string[];

  @ApiProperty({
    required: true,
    default: { start_date: new Date(), end_date: new Date() },
  })
  detail: Record<string, number>;
}

export class OutGetCartItem {
  @ApiProperty({ required: true, default: 2 })
  count: number;

  @ApiProperty({ required: true, default: 196000 })
  overallPrice: number;

  @ApiProperty({ required: true })
  product: OutGetCartItemProduct;
}

export type OutGetCartDto = OutGetCartItem[];
