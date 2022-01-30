import { type } from 'os';
import React from 'react';
import { MovieTitle, Rating, MovieTag, Button, MovieDescription } from "./";

type MovieProps = {
    title: string;
    rating: string; 
    tags: string[]; 
    description: string;
}

export const SelectedMovie  = (props: MovieProps) => {
    return(
        <div>
            <MovieTitle title={props.title} />
            <Rating rating={props.rating} />
            <MovieTag tags={props.tags} />
            <Button text= "Download" />
            <Button text="save for later" />
            <MovieDescription description={props.description} />
        </div>
    )
}