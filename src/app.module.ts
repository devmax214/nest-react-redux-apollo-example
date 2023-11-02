import { Module, MiddlewareConsumer } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
// import { join } from 'path';
import { AppController } from './app.controller';
import { SSRMiddleware } from './middleware/ssr.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'assets'),
    //   exclude: ['/api/(.*)'],
    // }),
  ],
  controllers: [AppController],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SSRMiddleware)
      .forRoutes(AppController);
  }
}
