import { IsInt, IsPositive, IsString } from 'class-validator';

export class InAddItemBodyDto {
  @IsString()
  itemId: string;

  @IsInt()
  @IsPositive()
  quantity?: number = 1;
}
