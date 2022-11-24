import { Injectable } from '@nestjs/common';
import { Movie } from './movies.model';

@Injectable()
export class MoviesService {

    getAllMovies(){
        return 'este metodo devuelve todas las peliculas';
    }
    
    
    getMovieFilterByTitle(name : string){
        return `este metodo devuelve todas las peliculas filtradas por el titulo segun la query: ${name}`;
    }

    
    getMovieById(id: string){
        return `este metodo devuelve la pelicula con id: ${id}`;
    }

    
    createMovie(movie: Movie){
        return 'este metodo crea una nueva pelicula';
    }

   
    replaceMovie(id: string,movie: Movie){
        return `este metodo reemplaza una pelicula con el id: ${id}`;
    }

    
    deleteMovie(id: string){
        return `este metodo elimina una pelicula con el id: ${id}`;
    }
}
