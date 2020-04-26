import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MyLogger } from './utils/my-logger';
import { setupSwagger } from './shared/swagger';

async function bootstrap() {
  const host = process.env.NODE_HOST || '127.0.0.1';
  const port = process.env.NODE_PORT || 4006;

  const app = await NestFactory.create(AppModule, {
    // logger: ['warn','error'],
    logger: new MyLogger(),
  });

  if (process.env.NODE_ENV === 'development') {
    setupSwagger(app, `${host}:${port}`);
  }

  await app.listen(port, host);

  console.log('process.env.NODE_ENV======', process.env.NODE_ENV, process.env.NODE_PORT);
  console.log(`Application is running on: http://${host}:${port}/cats`);
}
bootstrap();
