import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export type BadRequestErrorTypes =
  | 'LowCredit'
  | 'DuplicatePlayer'
  | 'MoreThanClubLimit'
  | 'MoreThanRoleLimit'
  | 'InvalidValidationCode'
  | 'ExpiredVerifier'
  | 'InvalidPassword'
  | 'InvalidePosition'
  | 'SamePosition'
  | 'DifferentRole'
  | 'SameIsPlaying'
  | 'InvalidImageType'
  | 'InvalidInputId'
  | 'RequiredEmailOrPhone'
  | 'InvalidTicketTypeForForgotPasswordTicket';

export type ErrorTypes =
  | BadRequestErrorTypes
  | 'NetworkError'
  | 'Unauthorized'
  | 'InvalidInput'
  | 'DuplicateError'
  | 'NotFoundError'
  | 'ServerError'
  | 'Request Timeout';

export abstract class BaseError {
  protected abstract TAG: string;
  protected abstract statusCode: HttpStatus;
  protected abstract errorType: ErrorTypes;
  protected abstract message: string;
  protected abstract errorData?: any;

  throw(): never {
    throw new HttpException(
      {
        statusCode: this.statusCode,
        errorType: this.errorType,
        message: this.message,
        errorData: this.errorData ?? {},
      },
      this.statusCode,
    );
  }
}
