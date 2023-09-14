import { ApiProperty } from '@nestjs/swagger';
import { TypeUserDto } from './type-user.dto';

export class OutGetUserDto {
  @ApiProperty({ required: true })
  user: TypeUserDto;
}
