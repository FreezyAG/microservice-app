import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

console.log('postgressusername', config.postgress.username);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('🚀  Task service Server ready at');
  await app.listen(3000);
}
bootstrap();
