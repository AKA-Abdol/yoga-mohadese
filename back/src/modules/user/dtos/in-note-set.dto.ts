import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class InNoteSetDto {
  @ApiProperty({ required: false, default: '' })
  @IsString()
  note: string;
}
