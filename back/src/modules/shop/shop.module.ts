import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { CourseModule } from '../course/course.module';
import { ShopService } from './shop.service';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from 'src/modules/payment/payment.module';

@Module({
  imports: [CourseModule, CartModule, OrderModule, PaymentModule],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
