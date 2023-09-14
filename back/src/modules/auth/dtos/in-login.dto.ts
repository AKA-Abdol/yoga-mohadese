import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class InLoginDto {
  @ApiProperty({ required: true, default: 'username' })
  @IsString()
  validator: string;

  @ApiProperty({ required: true, default: 'password' })
  @IsString()
  password: string;
}
