import { TrendingMovieResultModel } from "../types/models";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block; 
    white-space: nowrap;

    .movie-card {
        width: 170px;
        padding: 10px;
        background: red;
    }

    .movie-title{
        width: 100%;
        white-space: nowrap;
        overflow: break;
        text-overflow: break;
    }

    /* width */
    ::-webkit-scrollbar {
        height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const TrendingMovies = (props:{movies: TrendingMovieResultModel[]}) => {
    return(
        <Wrapper>
            { props.movies.map((movie:TrendingMovieResultModel) => { 
                const {id, poster_path, backdrop_path, title, original_name} = movie;
                return( 
                    <div className="movie-card" key={id}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${poster_path?poster_path:backdrop_path}`}  
                        alt={`${title? title: original_name}.jpg`}  
                        width="150px" height="200px" />
                        <div className="movie-title">
                            <h4>{title ? title : original_name}</h4>
                        </div>
                    </div>
                );
            })} 
        </Wrapper>
    )
}