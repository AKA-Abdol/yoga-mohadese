import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartRepo } from './cart.repo';
import { Cart, CartSchema } from './cart.schema';
import { CartService } from './cart.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  providers: [CartRepo, CartService],
  exports: [CartService],
})
export class CartModule {}
