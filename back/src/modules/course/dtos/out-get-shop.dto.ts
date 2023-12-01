import { ApiProperty } from '@nestjs/swagger';
import { Course } from '../course.schema';

type IGetShopItem = Omit<Course, 'deletedAt'>;
export class OutGetShopDto {
  @ApiProperty({ required: true, default: [] })
  values: IGetShopItem[];
  @ApiProperty({ required: true, default: 0 })
  count: number;
}
