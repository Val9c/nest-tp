import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StaticModule } from './static/static.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [StaticModule, DynamicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}