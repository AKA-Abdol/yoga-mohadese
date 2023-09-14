import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BadRequestErrorTypes, BaseError, ErrorTypes } from './base-error';

const getMessage = (errType: BadRequestErrorTypes): string => {
  switch (errType) {
    case 'MoreThanClubLimit':
      return 'از هر تیم حداکثر می توانید سه بازیکن انتخاب کنید';
    case 'DuplicatePlayer':
      return 'این بازیکن در تیم شما حضور دارد';
    case 'InvalidPassword':
      return 'پسورد شما نامعتبر است';
    case 'LowCredit':
      return 'اعتبار شما کافی نیست';
    case 'InvalidePosition':
      return ' این بازیکن در این پوزیشن نمیتواند قرار بگیرد ';
    case 'InvalidValidationCode':
      return 'کد فعالسازی وارد شده نامعتبر است';
    case 'SamePosition':
      return 'پوزیشنهای بازیکنان نمیتواند یکسان باشند.';
    case 'DifferentRole':
      return 'دروازه بان را نمیتوانید با نقش دیگری تغییر دهید. ';
    case 'SameIsPlaying':
      return 'یک بازیکن باید از نیمکت باشد و بازیکن دیگر از تیم';
    case 'InvalidImageType':
      return 'فرمت فایل نامعتبر است.';
    case 'ExpiredVerifier':
      return 'کد تایید شما منقضی شده است';
    case 'InvalidInputId':
      return 'شناسه وارد شده نامعتبر است';
    case 'MoreThanRoleLimit':
      return 'شما حداکثر میزان بازیکنان در این نقش را دارید';
    case 'RequiredEmailOrPhone':
      return 'وارد کردن ایمیل و یا تلفن اجباریست';
    case 'InvalidTicketTypeForForgotPasswordTicket':
      return 'تایپ تیکت انتخاب شده forget-password نیست';
    default:
      return 'UNTRANSLATED_ERROR: ' + errType;
  }
};

export class BadRequestError extends BaseError {
  TAG: 'BadRequestError';
  @ApiProperty({ required: true, default: HttpStatus.BAD_REQUEST })
  statusCode: HttpStatus = HttpStatus.BAD_REQUEST;
  @ApiProperty({ required: true, default: 'SomeBadRequestErrorType' })
  errorType: ErrorTypes;
  @ApiProperty({ required: true, default: '...' })
  message: string = 'دسترسی لازم برای این کار را ندارید';
  @ApiProperty({ required: true, default: undefined })
  errorData: any = undefined;

  constructor(errorType: BadRequestErrorTypes) {
    super();
    this.errorType = errorType;
    this.message = getMessage(errorType);
  }
}
