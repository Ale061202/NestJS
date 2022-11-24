import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './modules/movie/movie.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
