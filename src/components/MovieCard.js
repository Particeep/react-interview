import React from 'react';
import LikeDislike from './LikeDislike';



const MovieCard=({movie, handleDelete})=>{
    const {image,id,title, category,likes,dislikes} = movie;
    return(
        <div className="w-full bg-white rounded-lg shadow-md items-center lg:max-w-full lg:flex flex-col bg-gradient-to-tr from-gray-400 via-gray-600 to-gray-800">
            <img className="h-48 mt-4 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={image}/>
            <div className="mb-8">
            <div className=" text-gray-50 font-bold text-xl mb-2">{title}</div>
          <p className=" text-gray-50 text-base">{category}</p>
            </div>
            <LikeDislike likes={likes} dislikes={dislikes}/>
            <div className="mb-4">
              <button onClick={()=>handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                Delete
              </button>
            </div>
            </div>
    )
}

export default MovieCard;