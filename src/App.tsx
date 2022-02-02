import React, { useState, useEffect } from 'react';
import './App.css';
import { AppPageLayout, MovieDescription, SelectedMovie, TrendingMovies} from './components';
import { API_KEY, baseUrl } from './utilities';
import { SelectedMovieModel, TrendingMovieResultModel } from './types/models'; 


const Moviflix = () => {
    
  const [movies, setMovies] = useState<TrendingMovieResultModel[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovieModel>({
    "backdrop_path": "",
    "genre_ids": [],
    "title": "",
    "original_language": "",
    "original_title": "",
    "poster_path": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0,
    "overview": "",
    "release_date": "",
    "id": 0,
    "popularity": 0,
    "media_type": ""
  })

  useEffect(() => {
    fetch(`${baseUrl}trending/all/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results);        
      console.log('random num'+Math.floor(Math.random() * 20));
    }).catch(err => console.log(err));

  }, [])
   
  const getRand = (max: number) => {
    return Math.floor(Math.random() * max);
  }
  const getIndexMovie = () =>{
    const randomIndex = getRand(movies.length)
    const { 
            title, backdrop_path, genre_ids, 
            original_language,  original_title, poster_path, 
            video, vote_average, vote_count, overview, release_date,
            id, popularity, media_type
          } = movies[randomIndex];

    setSelectedMovie({ backdrop_path, genre_ids, title, original_language, original_title,
      poster_path, video, vote_average, vote_count, overview, release_date, id, popularity, media_type
    });
  }
 
  
useEffect(() => {
  setTimeout(() => {
    console.log('get Index Movie'+getIndexMovie())
  }, 10000)

},[getIndexMovie])
 
 
  return (
    <div className="App">
      <AppPageLayout>
        <SelectedMovie movie={selectedMovie} />
        <TrendingMovies movies={movies} />
      </AppPageLayout>   
    </div>
    );
}

export default Moviflix;
