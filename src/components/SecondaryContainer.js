import React from 'react'
 import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-52 relative pl-12 z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.nowPlayingMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer
