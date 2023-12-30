import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RolesGuard } from '../../guards/roles.guard';
import { Role } from '../../decorators/roles.decorator';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutGetUserDto } from './dtos/out-get-user.dto';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { InGetPaginatedUsers } from './dtos/in-get-paginated-users.dto';
import { OutGetPaginatedUsersDto } from './dtos/out-get-paginated-users.dto';
import { AccessService } from '../course/access.service';
import { OutStatusDto } from '../../dtos/out-status.dto';
import { BaseError } from '../../errors/base-error';
import { InGrantAccessDto } from './dtos/in-grant-access.dto';
import { InNoteSetDto } from './dtos/in-note-set.dto';
import { OutNoteDto } from './dtos/out-note.dto';
import { CartService } from '../shop/cart/cart.service';

@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly accessService: AccessService,
    private readonly cartService: CartService,
  ) {}
  @Get('/')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'search in all users' })
  async getPaginatedUsers(
    @Req() { userId }: { userId: string },
    @Query() input: InGetPaginatedUsers,
  ): Promise<OutGetPaginatedUsersDto> {
    const users = await this.userService.getPaginatedUsers(userId, input);
    return users;
  }

  @Get('/my')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get my user info' })
  async getMyUser(
    @Req() { userId }: { userId: string },
  ): Promise<OutGetUserDto> {
    const user = await this.userService.getUserByid(userId);
    if (user instanceof BaseError) return user.throw();
    return { user };
  }

  @Get(':user_id')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get single user by id' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async getUserInfo(
    @Req() { userId }: { userId: string },
    @Param('user_id') paramUserId: string,
  ): Promise<OutGetUserDto> {
    const user = await this.userService.getUserByid(paramUserId);
    if (user instanceof NotFoundError) return user.throw();
    if (user instanceof BadRequestError) return user.throw();
    return { user };
  }

  @Post(':user_id/access')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'grant course access to user' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async grantAccess(
    @Req() { userId: adminId }: { userId: string },
    @Param('user_id') user_id: string,
    @Body() { course_id }: InGrantAccessDto,
  ): Promise<OutStatusDto> {
    const user = await this.accessService.createAccess({
      course_id,
      user_id,
    });
    if (user instanceof BaseError) return user.throw();
    await this.cartService.deleteProduct(user_id, course_id);
    return { status: true };
  }

  @Delete(':user_id/access')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'reoke access to course from user' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async revokeAccess(
    @Req() { userId: adminId }: { userId: string },
    @Param('user_id') user_id: string,
    @Query('course_id') course_id: string,
  ): Promise<OutStatusDto> {
    const status = await this.accessService.remove_access(user_id, course_id);
    return status;
  }

  @Put(':user_id/note')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'set note for a user' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async setNote(
    @Req() { userId: adminId }: { userId: string },
    @Param('user_id') user_id: string,
    @Body() { note }: InNoteSetDto,
  ): Promise<OutStatusDto> {
    const user = await this.userService.updateNote(user_id, note);
    if (user instanceof BaseError) return user.throw();
    return { status: true };
  }

  @Get(':user_id/note')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get note of a user' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async getNote(
    @Req() { userId: adminId }: { userId: string },
    @Param('user_id') user_id: string,
  ): Promise<OutNoteDto> {
    const note = await this.userService.getUserNoteById(user_id);
    if (note instanceof NotFoundError || note instanceof BadRequestError)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    return { note };
  }
}
