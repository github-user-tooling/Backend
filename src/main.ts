import { NestFactory } from '@nestjs/core';
import { AppModule } from '@bw/app.module';
import { environment } from '@bw/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.port);
}
bootstrap();
