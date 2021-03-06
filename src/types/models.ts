export interface TrendingMovieModel{
    page: number;
    results: TrendingMovieResultModel[];
    total_pages: number;
    total_results: number;
}

export interface TrendingMovieResultModel{
    video: boolean;
    vote_average: number;
    overview: string;
    release_date: string;
    adult: boolean;
    backdrop_path?: string; 
    id: number;
    genre_ids?: number[]; 
    vote_count: number;
    original_language: string;
    original_title: string;
    poster_path?: string;
    title: string;
    popularity: number; 
    media_type: string;
    original_name?: string;
    rating?: string;
}

export interface SelectedMovieModel {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    title?: string;
    original_language?: string;
    original_title?: string;
    poster_path?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    overview: string;
    release_date: string;
    id: number;
    popularity?: number;
    media_type?: string;
}