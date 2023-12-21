import { Equals, IsString } from 'class-validator';
export class InCompleteOrderQueryDto {
  @IsString()
  userId: string;

  @Equals('secret')
  secret: string;
}
