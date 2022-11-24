import { Injectable } from '@nestjs/common';
import { Movie } from 'src/entities/movies.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class MovieService extends TypeOrmCrudService<Movie> {

    constructor(@InjectRepository(Movie) repository) {
        super(repository);
    }
}
