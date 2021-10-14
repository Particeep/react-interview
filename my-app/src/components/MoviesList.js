import { useState, useEffect } from 'react';
import '../styles/MovieCard.css';
import Gauge from './Gauge'
import {movies$} from '../movies'

export default function MoviesList(props) {
    const [list,setList] = useState([])
    useEffect(() => {
        console.log("render")
        movies$.then(res=>{
            console.log(props.filter)
            let theList = [];
            if(props.filter.length > 0) {
                theList = [...res].filter(el=>props.filter.includes(el.category))
                console.log(theList)
            } else {
                theList = [...res]
            }
            if (props.display !== res.length) {
                let start = props.page * props.display - props.display;
                let end = props.page * props.display
                theList = [...res].slice(start,end)
            }
            setList(theList)
        })
    },[props.filter, props.page, props.display])
    const handleDelete = (id) => {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }
    return (
        <div className='list'>
            {list.map(el=>{
                return (
                    <div className='card' key={el.id}>
                        <div className='poster'>
                            <img src={el.image} alt='poster'/>
                        </div>
                        <h1>{el.title}</h1>
                        <p>{el.category}</p>
                        <div className='bottom'>
                            <Gauge likes={el.likes} dislikes={el.dislikes}/>
                            <button className='delete-button' onClick={()=>handleDelete(el.id)}>Delete</button>                    
                        </div>
                    </div>
                 )
            })}
        </div>
    )
}
