import React, { Component } from 'react';
class LikeDislikeButton extends Component{
  constructor(props){
    super(props)
    this.state = {
      pressed: false,
      like: false,
      
    }
  }
  handleClick = (event)=>{
    this.setState({
      ...this.state,
       like: !this.state.like
       })
   }
  render(){
    return(
      <button
      
      onClick={this.handleClick}
      >{
        !this.state.like ?
         'Like' :
          'Dislike'
        }</button>
    );
  }
}

export default LikeDislikeButton;