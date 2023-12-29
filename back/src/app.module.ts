import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { ShopModule } from './modules/shop/shop.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
    ),
    UserModule,
    AuthModule,
    CourseModule,
    TicketModule,
    ShopModule,
    PaymentModule,
  ],
})
export class AppModule {}
