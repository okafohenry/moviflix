import { TrendingMovieResultModel } from "../types/models";
import styled from "styled-components";


interface WrapperProps {
    allMovies: TrendingMovieResultModel[]
}

const Wrapper = styled.div<WrapperProps>`
    width: 100%;
    overflow: scroll;
    padding: 0 20px;
    display: inline-grid;
    grid-gap: 20px;
    grid-template-columns: repeat(${props => props.allMovies.length}, 1fr);
    scroll-behavior: smooth;
    position: fixed;
    bottom: 0;

    .movie-title {
        font-size: 13px;
        text-transform: capitalise;
        padding-top: 10px;
        inline-size: 107px;
        word-break: break-all
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

    .movie-card:hover {
        img {
            width: 130px;
            height: 200px;
            cursor: pointer;
        }
        .movie-title {
            inline-size: 120px;
    }
`;


export const TrendingMovies = (props:{movies: TrendingMovieResultModel[]}) => {
    return(
        <Wrapper allMovies={props.movies}>
            { props.movies.map((movie:TrendingMovieResultModel) => { 
                const {id, poster_path, backdrop_path, title, original_name} = movie;
                return( 
                    <div className="movie-card" key={id}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${poster_path?poster_path:backdrop_path}`}  
                        alt={`${title ? title : original_name}.jpg`}  
                        width="110px" height="160px" />
                        <div className="movie-title">
                            <h4>{title ? title : original_name}</h4>
                        </div>
                    </div>
                );
            })} 
        </Wrapper>
    )
}