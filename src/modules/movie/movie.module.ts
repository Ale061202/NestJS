import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MoviesController } from 'src/controllers/movies/movies.controller';
import { Movie } from 'src/entities/movies.entity';
import { MovieService } from 'src/services/movie/movie.service';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    controllers: [MoviesController],
    providers: [MovieService]
})
export class MovieModule {}
