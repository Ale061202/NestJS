import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { WarehousesController } from './warehouses/warehouses.controller';
import { ProviderController } from './providers/providers.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController, WarehousesController, ProviderController],
  providers: [MoviesService],
})
export class AppModule {}
