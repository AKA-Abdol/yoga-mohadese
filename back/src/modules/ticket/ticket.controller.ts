import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  forwardRef,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { RolesGuard } from '../../guards/roles.guard';
import { Role } from '../../decorators/roles.decorator';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { InGetPaginatedTickets } from './dtos/in-get-paginated-tickets.dto';
import { OutGetPaginatedTicketsDto } from './dtos/out-get-paginated-tickets.dto';
import { OutGetTicketDto } from './dtos/out-get-ticket.dto';
import { InCreateTicket } from './dtos/in-create-ticket.dto';
import { DuplicateError } from '../../errors/duplicate-error';
import { VideoService } from '../video/video.service';
import { BaseError } from '../../errors/base-error';
import { InResolveForgetPassword } from './dtos/in-resolve-forget-password.dto';
import { OutGetUserDto } from '../user/dtos/out-get-user.dto';

@UseGuards(RolesGuard)
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('/')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get all tickets' })
  async getPaginatedTickets(
    @Req() { userId }: { userId: string },
    @Query() input: InGetPaginatedTickets,
  ): Promise<OutGetPaginatedTicketsDto> {
    const tickets = await this.ticketService.getPaginatedTickets(input);
    if (tickets instanceof BadRequestError) return tickets.throw();
    return tickets;
  }

  @Post('/')
  @ApiOperation({ summary: 'create ticket' })
  async createTicket(
    @Req() { userId }: { userId: string },
    @Body() input: InCreateTicket,
  ): Promise<OutGetTicketDto> {
    const ticket = await this.ticketService.createTicket(input);
    if (ticket instanceof DuplicateError) return ticket.throw();
    return { ticket };
  }

  @Delete(':ticket_id')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'delete single ticket by id' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async deleteTicket(
    @Req() { userId }: { userId: string },
    @Param('ticket_id') ticket_id: string,
  ): Promise<OutGetTicketDto> {
    const ticket = await this.ticketService.deleteTicketById(ticket_id);
    if (ticket instanceof NotFoundError) return ticket.throw();
    if (ticket instanceof BadRequestError) return ticket.throw();
    return ticket;
  }

  @Post('resolve/forgot_password')
  @Role('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'resolve forget password ticket' })
  @ApiNotFoundResponse({ type: NotFoundError })
  @ApiBadRequestResponse({ type: BadRequestError })
  async resolveForgetPasswordTicket(
    @Req() { userId }: { userId: string },
    @Body() input: InResolveForgetPassword,
  ): Promise<OutGetUserDto> {
    const ticket = await this.ticketService.resolveTicket(input);
    if (ticket instanceof NotFoundError) return ticket.throw();
    if (ticket instanceof BadRequestError) return ticket.throw();
    return ticket;
  }
}
