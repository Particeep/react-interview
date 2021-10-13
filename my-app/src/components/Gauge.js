import React, {useState} from 'react';
import '../styles/Gauge.css'

export default function Gauge(props) {
    const [likeNum, setLikeNum] = useState(props.likes);
    const [dislikeNum, setDislikeNum] = useState(props.dislikes);
    const [likeButton, setLikeButton] = useState(false);
    const [clickCount, setClickCount] = useState(0)
    const handleButton = ()=>{
        setClickCount(clickCount+1);
        if(!likeButton){
            setLikeButton(true);
            if (clickCount===0) {
                setLikeNum(likeNum+1)   
            } 
            if (clickCount%2 === 0 && clickCount > 0 ){
                setLikeNum(likeNum+1);
                setDislikeNum(dislikeNum-1)
            }
        } else {
            setLikeButton(false);
            if ((clickCount%2 === 1 && clickCount>1) || clickCount === 1){
                setDislikeNum(dislikeNum+1);
                setLikeNum(likeNum-1);
            } 
        }
        
       
    }
    const buttonStatus = !likeButton ? 'Like' : 'Dislike'
    const sum = likeNum + dislikeNum
    const sizeLike = likeNum/sum*100
    const sizeDislike = dislikeNum/sum*100

    const styleLike = sizeLike > 5 ? {
        width: `${sizeLike}px`
    } : { width: "5px"}
    const styleDislike = sizeDislike > 5 ? {
        width: `${sizeDislike}px`
    } : {width:"5px"}
    return (
        <div className='gauge' >
            <section>
                <div className='icons'>
                    <img className='up' src='https://o.remove.bg/downloads/5271210c-6dbb-4748-80f3-20954eb1aacf/image-removebg-preview.png'  alt='like'/>
                    <img className='down' src='https://o.remove.bg/downloads/5271210c-6dbb-4748-80f3-20954eb1aacf/image-removebg-preview.png'  alt='dislike'/>
                </div>
                <div className='line'>
                    <div className='like' style={styleLike}>
                        <p>{likeNum}</p>
                    </div>
                    <div className='dislike' style={styleDislike}>
                        <p>{dislikeNum}</p>
                    </div>
                </div>
            </section>
            <button className='like-button' onClick={handleButton}>{buttonStatus}</button>
        </div>
    )
}
