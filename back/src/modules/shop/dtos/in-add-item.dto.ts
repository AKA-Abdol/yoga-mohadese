import { IsInt, IsPositive } from 'class-validator';

export class InAddItemBodyDto {
  @IsInt()
  @IsPositive()
  quantity?: number = 1;
}
