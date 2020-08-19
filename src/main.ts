import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('Buying Frenzy API')
      .setDescription('API list for Buying Frenzy Application')
      .build()
  );
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
