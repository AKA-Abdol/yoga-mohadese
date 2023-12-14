import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './configs/swagger-config';
import { UserSchema } from './modules/user/user.schema';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log(`mongodb://${process.env.MONGO_HOST}/nest`);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  configSwagger(app);

  UserSchema.index({ username: 'text', firstname: 'text', lastname: 'text' });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
