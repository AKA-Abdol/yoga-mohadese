import { IsString } from 'class-validator';

export class InDeleteItemBodyDto {
  @IsString()
  itemId: string;
}
