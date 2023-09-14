import { ApiProperty } from '@nestjs/swagger';

const defaultJwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTU5YTFkOTc4OTJjZjI4ZWM3OGNmZiIsInVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LnRlc3QiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTIzVDE5OjQ2OjM3LjEzNloiLCJpYXQiOjE2NjY1NTQzOTd9.8FcPijM2L0DZ0FSJUDQMMn2rdD8GzutVhheugmZTuCIexport';

export class OutJwtTokenDto {
  @ApiProperty({ required: true, default: false })
  is_admin: boolean;

  @ApiProperty({ required: true, default: defaultJwt })
  token: string;
}
