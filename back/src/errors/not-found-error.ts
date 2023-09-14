import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BaseError, ErrorTypes } from './base-error';

export type FieldNames =
  | '...'
  | 'Route'
  | 'User'
  | 'Player'
  | 'Team'
  | 'Username'
  | 'Email'
  | 'Week'
  | 'Image'
  | 'Course'
  | 'Video'
  | 'Phone'
  | 'Ticket';

export const translateFieldName = (field: FieldNames): string => {
  switch (field) {
    case '...':
      return '...';
    case 'Email':
      return 'ایمیل';
    case 'Player':
      return 'بازیکن';
    case 'Phone':
      return 'شماره تلفن';
    case 'Route':
      return 'وب پیج';
    case 'Team':
      return 'تیم';
    case 'User':
      return 'کاربر';
    case 'Username':
      return 'نام کاربری';
    case 'Week':
      return ' هفته ';
    case 'Image':
      return 'تصویر';
    case 'Course':
      return 'کلاس';
    case 'Video':
      return 'ویدئو';
    case 'Ticket':
      return 'تیکت';
  }
};

const errorType: ErrorTypes = 'NotFoundError';
export class NotFoundError extends BaseError {
  TAG: 'NotFoundError';
  @ApiProperty({ required: true, default: HttpStatus.NOT_FOUND })
  statusCode: HttpStatus = HttpStatus.NOT_FOUND;
  @ApiProperty({ required: true, default: errorType })
  errorType: ErrorTypes = errorType;
  @ApiProperty({ required: true, default: 'ب... یافت نشد' })
  message: string;
  @ApiProperty({ required: true, default: undefined })
  errorData: any = undefined;

  constructor(field: FieldNames) {
    super();
    this.message = `${translateFieldName(field)} یافت نشد`;
  }
}
