import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './ticket.schema';
import mongoose from 'mongoose';

@Injectable()
export class TicketRepo {
  constructor(
    @InjectModel(Ticket.name) private readonly model: Model<Ticket>,
  ) {}

  async create(ticket: Ticket): Promise<MongoDoc<Ticket>> {
    return await this.model.create(ticket);
  }

  async deleteById(
    ticket: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Ticket> | null> {
    return await this.model.findOneAndDelete({ _id: ticket });
  }

  async getById(
    ticket_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Ticket> | null> {
    return await this.model.findById(ticket_id);
  }

  async getPaginatedTicket(
    limit: number,
    skip: number,
    type: string,
  ): Promise<PaginatedType<MongoDoc<Ticket>>> {
    return (
      await this.model.aggregate([
        { $match: { type: type } },
        {
          $facet: {
            values: [{ $skip: skip }, { $limit: limit }],
            count: [{ $count: 'count' }],
          },
        },
        { $set: { count: '$count.count' } },
        { $unwind: { path: '$count', preserveNullAndEmptyArrays: true } },
      ])
    )[0];
  }
}
