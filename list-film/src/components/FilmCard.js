import React, { Component } from 'react'



class FilmCard extends Component {
    state = {
        isLiked :false
     }
     handelLike(film){
        const {isLiked} = this.state
        this.setState({isLiked:!isLiked},()=>this.props.handelLike(film,this.state.isLiked))

     }
    render() {
        const {isLiked} = this.state
        const {film} = this.props;
        const {title, category,likes,dislikes} = film;
        return (
            <div>
             <h1>{title}</h1>
             <p>{category}</p>
             <p>like :{likes} dislike:{dislikes}</p>
             <button onClick={() =>this.props.handelDelete(film)}>Delete</button>
             <button onClick ={() =>this.handelLike(film) } >{!isLiked? "Like": "Dislike"}</button>
            </div>
         );
    }
}

export default FilmCard;