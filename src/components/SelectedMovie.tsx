import { MovieTitle, Rating, MovieTag, Button, MovieDescription } from "./";
import { SelectedMovieModel } from "../types/models";

export const SelectedMovie  = (props: {movie: SelectedMovieModel}) => {
    return(
        <div>
            <MovieTitle title={props.movie.title} />
            <Rating rating={props.movie.vote_average} />
            {/* <MovieTag tags={props.movie.tags} /> */}
            <Button text= "Download" />
            <Button text="save for later" />
            <MovieDescription description={props.movie.overview} />
        </div>
    )
}