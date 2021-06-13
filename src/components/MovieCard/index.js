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
    constructor(){
        super();
        // Intializing State without Likes and DisLikes by user
         this.state={
             isLiked : false,
             isDisLiked : false
         }
    }
    // 
   
    liked = (fn,id) =>{
       if(!this.state.isLiked)
       {
         fn(id,this.state.isDisLiked,true);
         this.setState({
             isLiked:true,
             isDisLiked:false,
         })
       }
       else{
            fn(id,this.state.isDisLiked,false);
            this.setState({
                isLiked:false
            })
       }
        

    }
    disLiked = (fn,id) =>{
        if(!this.state.isDisLiked)
       {
         fn(id,this.state.isLiked,true);
         this.setState({
             isLiked:false,
             isDisLiked:true,
         })
       }
       else{
        fn(id,this.state.isLiked,false);
        this.setState({
            isDisLiked:false
        })
       }
    }

    render(){

        let {title, category, likes, dislikes,id} =this.props.movie;
        let {likeMovie,disLikeMovie,deleteMovie} = this.props;
        let {isDisLiked,isLiked} =this.state;
        return(
            <div id={id} className="movie-card-outer">
                
                <div className="movie-card">
                    <h3>{title}</h3>
                    <h6>{category}</h6>
                </div>
                <div className="movie-card-bottom">
                  <div className="likes-holder">  {(isDisLiked)?"Disliked " : "DisLikes"} <i onClick={()=>{this.disLiked(disLikeMovie,id)}} className="fa fa-thumbs-down" style={{"font-size":"20px",color:"#000"}}></i> { dislikes }</div>
                  <div className="likes-holder" > {(isLiked)?"Liked " : "Likes "}<i onClick={()=>{this.liked(likeMovie,id)}} className="fa fa-thumbs-up" style={{"font-size":"20px",color:"#000"}}></i> {likes}</div> 
                 </div>
                 <div className="delete">
                 <i onClick={()=>{deleteMovie(id)}}  class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default MovieCard;