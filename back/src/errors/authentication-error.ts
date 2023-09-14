import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BaseError, ErrorTypes } from './base-error';

const errorType: ErrorTypes = 'Unauthorized';
const message = 'دسترسی لازم برای این کار را ندارید';
export class AuthenticationError extends BaseError {
  TAG: 'AuthenticationError';
  @ApiProperty({ required: true, default: HttpStatus.UNAUTHORIZED })
  statusCode: HttpStatus = HttpStatus.UNAUTHORIZED;
  @ApiProperty({ required: true, default: errorType })
  errorType: ErrorTypes = errorType;
  @ApiProperty({ required: true, default: message })
  message: string = message;
  @ApiProperty({ required: true, default: undefined })
  errorData: any = undefined;
}
