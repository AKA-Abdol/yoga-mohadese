import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class InRegisterDto {
  @ApiProperty({ required: true, default: 'username' })
  @IsString()
  @MinLength(8, { message: 'نام کاربری باید حداقل ۸ کاراکتر داشته باشد' })
  @Transform((param) => param.value.toLowerCase())
  username: string;

  @ApiProperty({ required: true, default: 'password' })
  @IsString()
  @MinLength(8, { message: 'کلمه عبور باید حداقل ۸ کاراکتر داشته باشد' })
  password: string;

  @ApiProperty({ required: true, default: 'firstname' })
  @IsString()
  firstname: string;

  @ApiProperty({ required: true, default: 'lastname' })
  @IsString()
  lastname: string;

  @ApiProperty({ required: false, default: 'email@email.email' })
  @IsOptional()
  @ValidateIf((email) => email !== '')
  @IsString()
  @IsEmail({}, { message: 'ایمیل نامعتبر است' })
  @Transform((param) => param.value.toLowerCase())
  email?: string;

  @ApiProperty({ required: false, default: '09120000000' })
  @IsString()
  @IsPhoneNumber('IR', { message: 'شماره تلفن نامعتبر است' })
  phone: string;
}
