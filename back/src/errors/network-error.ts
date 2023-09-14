import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BaseError, ErrorTypes } from './base-error';

const errorType: ErrorTypes = 'NetworkError';
const baseMessage = 'ارتباط شما با اینترنت ضعیف است';
export class NetworkError extends BaseError {
  TAG: 'NetworkError';
  @ApiProperty({ required: true, default: HttpStatus.GATEWAY_TIMEOUT })
  statusCode: HttpStatus = HttpStatus.GATEWAY_TIMEOUT;
  @ApiProperty({ required: true, default: errorType })
  errorType: ErrorTypes = errorType;
  @ApiProperty({ required: true, default: baseMessage })
  message: string;
  @ApiProperty({ required: true, default: undefined })
  errorData: any = undefined;

  constructor(message?: string) {
    super();
    this.message = message ?? baseMessage;
  }
}
