import { ApiProperty } from '@nestjs/swagger';

export class TypeAuthInfoDto {
  @ApiProperty({ required: true, default: 'id' })
  id: string;

  @ApiProperty({ required: true, default: 'test' })
  username: string;

  @ApiProperty({ required: true, default: 'test' })
  password: string;

  @ApiProperty({ required: true, default: false })
  is_admin: boolean;
}
