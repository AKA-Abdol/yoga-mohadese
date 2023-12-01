import { Injectable } from '@nestjs/common';
import { OrderItemRepo } from './orderItem.repo';

@Injectable()
export class OrderItemService {
  constructor(private readonly orderItemRepo: OrderItemRepo) {}

  // private async createCourseItem() {}

  // async addCourse()
}
