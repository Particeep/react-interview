import React, {useState} from 'react';
import { createPortal } from 'react-dom';


const LikeDislike=({likes, dislikes})=>{
    const [like, setLike] = useState(false);
    const [dislike,setDislike] = useState(false);
    const [likesNum,setLikesNum] = useState(likes);
    const [dislikesNum, setDislikesNum] = useState(dislikes);

    const handleDislike=()=>{
        if(!dislike){
            setDislike(true)
            setDislikesNum(dislikes+1)
            if(like){
                setLike(false)
                setLikesNum(likes-1)
            }
        }
        if(dislike){
            setDislike(false)
            setDislikesNum(dislikesNum-1)
        }
    }


    const handleLike=()=>{
        if(!like){
            setLike(true)
            setLikesNum(likes+1)
            if(dislike){
                setDislike(false)
                setDislikesNum(dislikesNum-1)
            }
        }
        if(like){
            setLike(false)
            setLikesNum(likesNum-1)
        }
        

    }
    return(
        <div className="inline-flex items-center flex-row mb-4">
            <button onClick={handleLike}>
                {like?<img src="https://img.icons8.com/material-sharp/24/000000/thumb-up.png"/>:<img src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/>}
            </button>
            <span>{likesNum} </span>
            <span> - </span>
            <span> {dislikesNum}</span>
            <button onClick={handleDislike}>
                {dislike?<img className='transform rotate-180' src="https://img.icons8.com/material-sharp/24/000000/thumb-up.png"/>:<img className="transform rotate-180" src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/>}
                
            </button>
            
        </div>
    )
}

export default LikeDislike;