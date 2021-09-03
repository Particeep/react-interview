import { mdiThumbDownOutline, mdiThumbUpOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import { Button } from 'ui-neumorphism';

function MovieList({ movie, onToggle, onDelete, onToggleDislike }) {

    const [valueChecked, setValueChecked] = useState(false)
    
    const handleChangeValue = (movie) => {
        if (valueChecked) {
            onToggle(movie)
            setValueChecked(false)
        } else {
            onToggleDislike(movie)
            setValueChecked(true)
        }
    }
    
    return (
        <>
            <div className="movieBlock" key={movie.id}>
                <h1>{movie.title}</h1>
                <p>{movie.category}</p>
                <div className="likesAndDislikesBlock">
                    <div className="likesBlock">
                        <Icon path={mdiThumbUpOutline} size={0.9} />
                        <p className="numberLikesAndDislikes">{movie.likes}</p>
                    </div>
                    <div className="dislikesBlock">
                        <Icon path={mdiThumbDownOutline} size={0.9} />
                        <p className="numberLikesAndDislikes">{movie.dislikes}</p>
                    </div>
                </div>
                <div className="footerBlock">
                    <label className="label">
                        <div className="toggle">
                            <input
                                className="toggle-state"
                                type="checkbox"
                                name="check"
                                value="check"
                                checked={valueChecked}
                                onChange={() => handleChangeValue(movie)}
                                
                            />
                            <div className="indicator"></div>
                        </div>
                        <div className="label-text">like/dislike</div>
                    </label>
                    <Button className="deleteButton" onClick={()=>onDelete(movie)}>Supprimer</Button>
                </div>
            </div>
        </> 
    )
}

export default MovieList