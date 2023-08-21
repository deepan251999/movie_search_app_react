import React from 'react';
import {BsFire} from 'react-icons/bs';
import {BiExit, BiSearch} from 'react-icons/bi'
import './main.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Movies from '../movies/Movies';
import axios from 'axios';

function Main() {
    const navigate = useNavigate();

    const [toggleMovies, setToggleMovies] = useState([
        {id: 1, name: "Trending", click: false},
        {id: 2, name: "Movies", click: false },
        {id: 3, name: "TVSeries", click: false},
        ],
    );

    let moviesUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1e0dc4aa30659f4fb1621af150c5086c";

    const [movieData, setData] = useState([]);
    const [movieDataUrl, setMovieDataUrl] = useState(moviesUrl);
    const [moviesSearch, setMoviesSearch] = useState("");

    useEffect(() => {
        axios.get(movieDataUrl)
        .then(response => setData(response.data.results));
    },[movieDataUrl]
    );

    const handleMoviesName = (movieType, index) => {
        setToggleMovies(items =>
            items.map(item =>
              item.id === index + 1 ? { ...item, click: true } : { ...item, click: false }
            )
        );

        if(movieType === "Trending"){
            moviesUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1e0dc4aa30659f4fb1621af150c5086c";
        }
        if(movieType === "Movies"){
            moviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=1e0dc4aa30659f4fb1621af150c5086c";
        }
        if(movieType === "TVSeries"){
           moviesUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=1e0dc4aa30659f4fb1621af150c5086c";
        } 
        setMovieDataUrl(moviesUrl);
    };
  
    const handleMoviesSearch = (event) => {
        setMoviesSearch(event.target.value);
    };

    const filterMovie = moviesSearch.length === 0 ?
    movieData
    : 
    movieData.filter((movieData) =>
        movieData.title.toLowerCase().includes(moviesSearch.toLowerCase())
    );

    const handleExit = () => {
        navigate('/');
    };

    return (
        <div>
            <div className='search_input_container'>
                <div className='search_input_item'>
                    <BiSearch style={{position:'absolute', top:'22px', left:'26px', fontSize:'26px', color:'#fff'}}/>
                    <input 
                        type="text" 
                        placeholder='Movies, shows and more'
                        onChange={handleMoviesSearch}
                    />
                </div>
            </div>
            <div className="movies_list_container">
                {
                    filterMovie.length === 0 ? 
                    <p className="movies_notfound">Not Found</p> 
                    :
                    filterMovie.map((movie, index) => (
                            <Movies movie={movie} key={index} />
                        )
                    )
                }
            </div>
            <nav>
                <ul>
                    {
                        toggleMovies.map((item, index) => {
                            return(
                                <li key={index} name={item.name} onClick={() => {handleMoviesName(item.name, index)}} style={{ backgroundColor: item.click ? "black" : "" }}>
                                    <div className='icon_container'><BsFire/></div>
                                    {item.name}
                                </li> 
                            )
                        })
                    }
                    <li onClick={handleExit}>
                        <div className='icon_container'><BiExit/></div><p>Exit</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Main;