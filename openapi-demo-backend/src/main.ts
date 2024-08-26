import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { stringify as stringifyYaml } from 'yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('OpenAPI example')
    .setDescription('description')
    .setVersion('1.0')
    .addTag('openApiExample')
    .addBearerAuth()
    .build();

  const document = SwaggerModule
    .createDocument(app, config, {
      operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey,
    });
  SwaggerModule.setup('api', app, document);

  app.use('/api-yaml', (_, res) => {
    const yamlDocument = stringifyYaml(document);
    res.header('Content-Type', 'application/x-yaml');
    res.send(yamlDocument);
  });

  app.enableCors();

  await app.listen(5555);
}

bootstrap();
