import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class InCreateTicket {
  @ApiProperty({ required: true, default: 'forget-password' })
  @IsString()
  type: string;

  @ApiProperty({ required: true, default: 'fullname' })
  @IsString()
  fullname: string;

  @ApiProperty({ required: true, default: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ required: true, default: '09120000000' })
  @IsString()
  phone: string;
}
