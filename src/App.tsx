import React, { useState, useEffect } from 'react';
import './App.css';
import { AppPageLayout, SelectedMovie, TrendingMovies} from './components';
import { API_KEY, baseUrl } from './utilities';
import { TrendingMovieResultModel } from './types/models'; 



const Moviflix = () => {
    const [movies, setMovies] = useState<TrendingMovieResultModel[]>([]);
  useEffect(() => {    
    fetch(`${baseUrl}trending/all/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results);  
    }) 
    .catch(err => console.log(err));  
  });

  

  return (
    <div className="App">
      <AppPageLayout>
        <TrendingMovies movies={movies} />
      </AppPageLayout>   
    </div>
    );
}

export default Moviflix;
