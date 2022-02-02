import React, { useState, useEffect } from 'react';
import './App.css';
import { AppPageLayout, MovieDescription, SelectedMovie, TrendingMovies} from './components';
import { API_KEY, baseUrl } from './utilities';
import { SelectedMovieModel, TrendingMovieResultModel } from './types/models'; 


const Moviflix = () => {
    
  const [movies, setMovies] = useState<TrendingMovieResultModel[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovieModel>({
    "backdrop_path": "",
    "title": "",
    "original_language": "",
    "original_title": "",
    "poster_path": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0,
    "overview": "",
    "release_date": "",
    "id": 0
  });


  useEffect(() => {
    fetch(`${baseUrl}trending/all/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results); 
      const randIndex = getRand(data.results.length);
      setSelectedMovie(data.results[randIndex]);        
    }).catch(err => console.log(err));

  }, []);  

  const getRand = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  
  return (
    <div className="App">
      <AppPageLayout>
        <SelectedMovie movie={selectedMovie} />
        {movies && <TrendingMovies movies={movies} />}
      </AppPageLayout>   
    </div>
    );
}

export default Moviflix;
