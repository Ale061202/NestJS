import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Movie } from './movies.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService){

    }

    @Get()
    getAllMovies(){
        return this.movieService.getAllMovies();
    }
    
    @Get()
    getMovieFilterByTitle(@Query('name') name : string){
        return this.movieService.getMovieFilterByTitle(name);
    }

    @Get(':id')
    getMovieById(@Param('id') id: string){
        return this.movieService.getMovieById(id);
    }

    @Post()
    createMovie(@Body() movie: Movie){
        return this.movieService.createMovie(movie);
    }

    @Put(':id')
    replaceMovie(@Param('id') id: string,@Body() movie: Movie){
        return this.movieService.replaceMovie(id,movie);
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string){
        return this.movieService.deleteMovie(id);
    }
}
