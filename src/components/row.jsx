import React, { useState, useEffect } from 'react';
import './style.css';
import axios from '../axios';

// image url 
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row ({title, fetchUrl, isLargeRow}) {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log('This movie:', movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}
