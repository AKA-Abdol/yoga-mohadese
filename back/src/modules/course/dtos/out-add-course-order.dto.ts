import { ApiProperty } from '@nestjs/swagger';

export class OutAddCourseOrder {
  @ApiProperty({ required: true })
  orderItem: string;
}
