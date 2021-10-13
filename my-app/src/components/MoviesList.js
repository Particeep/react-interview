import React, { useState, useEffect } from 'react';
import '../styles/MovieCard.css';
import Gauge from './Gauge'
import {movies$} from '../movies'

export default function MoviesList() {
    const [list,setList] = useState([])
    useEffect(() => {
        console.log("render")
        movies$.then(res=>{
            console.log(res)
            setList(res)
        })
    }, [])

    return (
        <div>
            {list.map(el=>{
                return (
                    <div className='card' key={el.id}>
                        <img src={el.image} alt='poster'/>
                        <h1>{el.title}</h1>
                        <p>{el.category}</p>
                        <Gauge like={el.like} dislike={el.dislike}/>
                    </div>
                 )
            })}
        </div>
    )
}
