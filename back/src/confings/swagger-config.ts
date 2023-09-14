import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app: INestApplication) => {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Fpl api doc')
    .setDescription('Nestjs sample project developed by moAmza.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('/api/docs', app, document);
};
