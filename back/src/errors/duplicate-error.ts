import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BaseError, ErrorTypes } from './base-error';
import { FieldNames, translateFieldName } from './not-found-error';

const errorType: ErrorTypes = 'DuplicateError';
export class DuplicateError extends BaseError {
  TAG: 'DuplicateError';
  @ApiProperty({ required: true, default: HttpStatus.BAD_REQUEST })
  statusCode: HttpStatus = HttpStatus.BAD_REQUEST;
  @ApiProperty({ required: true, default: errorType })
  errorType: ErrorTypes = errorType;
  @ApiProperty({ required: true, default: 'ب... شما تکراری ست' })
  message: string;
  @ApiProperty({ required: true, default: undefined })
  errorData: any = undefined;

  constructor(field: FieldNames) {
    super();
    this.message = `${translateFieldName(field)} شما تکراری ست`;
  }
}
