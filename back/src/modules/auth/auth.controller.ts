import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { InLoginDto } from './dtos/in-login.dto';
import { InRegisterDto } from './dtos/in-register.dto';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthService } from './auth.service';
import { OutJwtTokenDto } from './dtos/out-jwt-token.dto';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { DuplicateError } from '../../errors/duplicate-error';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { BaseError } from 'src/errors/base-error';

@UseGuards(RolesGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'register user' })
  @ApiBadRequestResponse({ type: DuplicateError })
  async register(@Body() userInfo: InRegisterDto): Promise<OutJwtTokenDto> {
    console.log(userInfo);

    const data = await this.authService.register(userInfo);
    if (data instanceof BaseError) return data.throw();
    return data;
  }

  @Post('login')
  @ApiOperation({ summary: 'login user' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  @ApiNotFoundResponse({ type: NotFoundError })
  async login(@Body() userInfo: InLoginDto): Promise<OutJwtTokenDto> {
    const data = await this.authService.login(userInfo);
    if (data instanceof BadRequestError) return data.throw();
    if (data instanceof NotFoundError) return data.throw();
    return data;
  }
}
