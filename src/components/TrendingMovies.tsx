import { TrendingMovieResultModel } from "../types/models";

export const TrendingMovies = (props:{movies: TrendingMovieResultModel[]}) => {
    return(
        <div>
            { props.movies.map((movie:TrendingMovieResultModel) => { 
                const {id, poster_path, backdrop_path, title, original_name} = movie;
                return( 
                    <div key={id}>
                        <img src={poster_path? poster_path: backdrop_path} alt={`${title? title: original_name}.jpg`} />
                        <h4>{title ? title : original_name}</h4>
                    </div>
                );
            })} 
        </div>
    )
}