import { Injectable } from '@nestjs/common';
import { InLoginDto } from './dtos/in-login.dto';
import { InRegisterDto } from './dtos/in-register.dto';
import { UserService } from '../user/user.service';
import { sign } from 'jsonwebtoken';
import { TypeJwtPayload } from './dtos/type-jwt-payload.dto';
import { OutJwtTokenDto } from './dtos/out-jwt-token.dto';
import { DuplicateError } from '../../errors/duplicate-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { NotFoundError } from '../../errors/not-found-error';
import { BaseError } from 'src/errors/base-error';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  private generateJwt(user: TypeJwtPayload): string {
    return sign(user, 'secret');
  }

  async register(
    userInfo: InRegisterDto,
  ): Promise<OutJwtTokenDto | DuplicateError | BadRequestError> {
    const isInputValid = await this.userService.verifyRegisterInput(userInfo);
    if (isInputValid !== true) return isInputValid;
    const user = await this.userService.createUser(userInfo);
    if (user instanceof BaseError) return user;
    const token = this.generateJwt({
      role: user.is_admin ? 'ADMIN' : 'USER',
      userId: user.id,
      username: user.username,
    });

    return { token, is_admin: user.is_admin };
  }

  async login({
    validator,
    password,
  }: InLoginDto): Promise<OutJwtTokenDto | NotFoundError | BadRequestError> {
    const authInfo =
      (await this.userService.getAuthInfoByUsername(validator)) ??
      (await this.userService.getAuthInfoByPhone(validator)) ??
      (await this.userService.getAuthInfoByEmail(validator));
    if (!authInfo) return new NotFoundError('User');
    if (authInfo.password !== password)
      return new BadRequestError('InvalidPassword');
    const token = this.generateJwt({
      role: authInfo.is_admin ? 'ADMIN' : 'USER',
      userId: authInfo.id,
      username: authInfo.username,
    });

    return { token, is_admin: authInfo.is_admin };
  }
}
