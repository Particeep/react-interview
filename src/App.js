import React, { Component } from 'react';
import './App.css';
import {movies$} from './movies';
import UI from './UI';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [],
				 aux: false,
				 currentPage: 1,
          		todosPerPage: 3,
				checkCategory: false,
				checked1: false,
				checked2: false,
				checked3: false,
				checked4: false};
  }

/* ------------------ */
/*Change the checked value P */
/*------------------------*/
	handleChange1 =()=> {
    this.setState({
        checked1: !this.state.checked1    
    })
  }

  handleChange2 =() => {
    this.setState({
        checked2: !this.state.checked2      
    })
  }
  handleChange3 =() => {
    this.setState({
        checked3: !this.state.checked3     
    })
  }

  handleChange4=() => {
    this.setState({
        checked4: !this.state.checked4   
    })
  }
  
  /* ------------------ */
/*delete carts  */
/*------------------------*/
  
	deletehandle = (id)=>{
		let movieIndex = this.state.data.findIndex((elem)=>{
			return elem.id === id;
		});
		const moviesData = [ ...this.state.data];
		moviesData.splice(movieIndex, 1);
		this.setState({data: moviesData, aux: true});
	}
 
/* ------------------ */
/*Make like or dislike to such movie */
/*------------------------*/
Opinion = (id) => {
	
	let movieIndex = this.state.data.findIndex((elem)=>{
			return elem.id === id;
		});
	const moviesData = [ ...this.state.data];
	console.log(moviesData[movieIndex]);
	if(!moviesData[movieIndex].Active){
		moviesData[movieIndex].likes = moviesData[movieIndex].likes + 1;
	}
	else {
		moviesData[movieIndex].dislikes = moviesData[movieIndex].dislikes + 1;
	}
	moviesData[movieIndex].Active = ! moviesData[movieIndex].Active;
	
	
    this.setState({data: moviesData } );
}



/* ------------------ */
/*// Import movies$ from movies.js and update the state */
/*------------------------*/

  componentDidMount() {
    if(!this.state.aux){
		movies$.then(response => {
			const updatePost = response.map(post => {
				return {
					...post,
					Active: false
					
				}
			});
	this.setState({data: updatePost});
		});
		
	}
	 else {
		 this.setState({aux: false});
	 }
  }

/* ------------------ */
/*Change the page next/previous */
/*------------------------*/

handleClickNext = () =>{
        if(this.state.currentPage < 4){
          this.setState({
          currentPage: this.state.currentPage + 1
        })   
      } else {
		  return null;
	  }
      }
handleClickPrevious = () =>{
        this.setState({ currentPage: (this.state.currentPage !== 1) ? this.state.currentPage - 1 :this.state.currentPage
        })
      }

  render() {
		
    return (
      <div>
        
		<UI currentPage ={this.state.currentPage} todosPerPage= {this.state.todosPerPage}
		todos = {this.state.data}
		handleClickNext={this.handleClickNext}
		handleClickPrevious = {this.handleClickPrevious}
		
		Opinion={this.Opinion}
		deletehandle={this.deletehandle}
		showCategory={() =>this.showCategory}
		handleChange1={this.handleChange1}
		handleChange2={this.handleChange2}
		handleChange3={this.handleChange3}
		handleChange4={this.handleChange4}
		checked1 = {this.state.checked1}
		checked2= {this.state.checked2}
		checked3= {this.state.checked3}
		checked4 = {this.state.checked4}/>
      </div>
    )
  }
}
export default App;