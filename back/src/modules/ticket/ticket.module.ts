import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketController } from './ticket.controller';
import { TicketRepo } from './ticket.repo';
import { Ticket, TicketSchema } from './ticket.schema';
import { TicketService } from './ticket.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
    UserModule,
  ],
  controllers: [TicketController],
  providers: [TicketService, TicketRepo],
  exports: [TicketService],
})
export class TicketModule {}
