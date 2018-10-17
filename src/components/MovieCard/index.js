import React,{Component} from 'react';
import './movie.css'
/* @@Movie 

{
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1

}
@@ 
*/

class MovieCard extends Component{
    render(){
        let {title, category, likes, dislikes} =this.props.movie
        return(
            <div className="movie-card-outer">
                <div className="movie-card">
                   <h3>{title}</h3>
                    <h6>{category}</h6>
                </div>
                <div className="movie-card-bottom">
                        Likes : {likes}
                        Dislikes : {dislikes}
                 </div>
            </div>
        )
    }
}
export default MovieCard;