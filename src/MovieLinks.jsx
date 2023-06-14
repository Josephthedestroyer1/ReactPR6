import React from 'react'
import { useParams } from 'react-router-dom';
import movieList from './Data';

function MovieLinks() { 
     const { title } = useParams();
     const movie = movieList.find((movie) => movie.title === title);
     return (
     <div className='headerr'> 
          <a href="/">
               <h1>Movies</h1>
          </a>
          <h3>
               Title: {title}
          </h3>
          <p>
               Description: {movie.description}
          </p>
          <h3>
               Trailer
          </h3>
          <p>
               {movie.trailer}
          </p>

     </div>
     )
}

export default MovieLinks