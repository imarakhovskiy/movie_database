export interface DetailedMovieDescription {
    title: string;
    year: string;
    runtime: string;
    genre: string;
    type: string;
    plot: string;
    imdbID: string;
    imdbRating: string | number;
    poster: string;
}

export interface MovieDescription {
    title: string;
    type: string;
    year: string;
    imdbID: string; 
    poster: string;
}