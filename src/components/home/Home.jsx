import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className='home_container'>
            <div className="home_content">
                <h1>Welcome to <span>Prime Video</span> </h1>
                <p>Watch the latest movies, TV shows, and award-winning movies Originals</p>

                <Link to='main'>
                    <button>Get Started</button>
                </Link>

            </div>
        </div>
    )
}


export default Home;