import React, { useState, useEffect } from 'react';
import './style.css';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row ({title, fetchUrl}) {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`}
                        className="row_poster"
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}
