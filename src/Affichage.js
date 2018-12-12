import React, {Component} from 'react';
import './Affichage.css';
import like from './images/like.png';
import dislike from './images/dislike.png';


 class Affichage extends Component {

    state = {
        result : this.props.like,
        result2 : this.props.dislike
      }
    
      handleAdd = () => {
        this.setState({
          result: this.state.result + 1
        })
      }
    
      handleLess = () => {
        this.setState({
          result2 : this.state.result2 + 1
        })
      }


     

      render(){
        return (
            <div className="bloc">
               <div className="cards">
                  <div>
                      <h1>{this.props.title}</h1>
                      <h2>{this.props.category}</h2>
                  </div>           
                
                <div className="progress">
                  <progress id="bar" value={this.state.result} max="100"></progress>
                  {this.state.result} Likes
                </div><br />
                <div className="progress">
                  <progress id="bar" value={this.state.result2} max="100"></progress>
                  {this.state.result2}  Dislikes
                </div>
                <div className="buttons">
                      <button onClick={this.handleAdd}><img className="like" src={like} alt="main2" /></button>
                      <button onClick={this.handleLess}><img className="like" src={dislike} alt="main" /></button>
                </div>
                <div>
                  <button name={this.props.title} className="supp" onClick={this.props.handleSupprime}>Supprimer</button>
                </div>
               </div>
            </div>
          )
        }
      }
    

export default Affichage;

