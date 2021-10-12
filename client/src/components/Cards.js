import React, {useState} from 'react';
import {movies$} from '../movies.js'

export default function Cards() {
    const [list, setList] = useState([...movies$]);
    const deleteMovie = (id) => {
        list.splice(id, 1);
        setList([...list])
    }
    return (
        <div>
            {list.map(el=>{
                return (
                    <div key={el.id}>
                    {el.name} 
                    {el.category}
                    <button onClick={()=>deleteMovie(el.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
