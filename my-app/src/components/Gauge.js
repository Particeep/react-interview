import React from 'react';
import '../styles/Gauge.css'

export default function Gauge(props) {
    const styleLike = {
        width: `${props.like*10}px`
    }
     const styleDislike = {
        width: `${props.dislike*10}px`
    }
    return (
        <div className='gauge' >
            <div className='like' style={styleLike}>
                <img src='https://o.remove.bg/downloads/5271210c-6dbb-4748-80f3-20954eb1aacf/image-removebg-preview.png'  alt='like'/>
            </div>
            <div className='dislike' style={styleDislike}>
                 <img src='https://o.remove.bg/downloads/5271210c-6dbb-4748-80f3-20954eb1aacf/image-removebg-preview.png'  alt='dislike'/>
            </div>
        </div>
    )
}
