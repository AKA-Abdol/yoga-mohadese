import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TypeTicketDto {
  @ApiProperty({ required: true, default: 'id' })
  @IsString()
  id: string;

  @ApiProperty({ required: true, default: 'forget-password' })
  @IsString()
  type: string;

  @ApiProperty({ required: true, default: 'firstname' })
  @IsString()
  fullname: string;

  @ApiProperty({ required: true, default: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ required: true, default: '09120000000' })
  @IsString()
  phone: string;

  username: string;
}
