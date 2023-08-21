import React from "react";
import './movies.css';

function Movies(props){
    const {
            movie,
          } = props;
   
    const img_path = "https://image.tmdb.org/t/p/w500";

    return(
        <>
            <div className='movies_list_item'>
                <div className='movies_image'>
                    <img src={img_path + movie.poster_path} alt={movie.title} />
                </div>
                <h6 className='movies_tittle'>{movie.title}</h6>
                <p className='movies_year'> Movie Ratings: {movie.vote_average}</p>
            </div> 
        </>
    )
};

export default Movies;