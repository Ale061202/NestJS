import { Controller } from '@nestjs/common';
import { Movie } from 'src/entities/movies.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { MovieService } from 'src/services/movie/movie.service';

@Crud({
    model: {
        type: Movie,
    },
})

@Controller('movies')
export class MoviesController implements CrudController<Movie> {

    constructor(public movieService: MovieService) {}
}
