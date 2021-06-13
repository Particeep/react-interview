import React, { Component } from 'react';
import { movies$ } from './movies';
import Item from './item';
import Button from './button';
import LikeDislikeButton from './like-dislike-button';
import MoviesContainer from './movies-container';
import Categories from './categories';
import InputElementsAmount from './select-elements-per-page'
class Test extends Component{  
  constructor(props){
    super(props)
    this.state ={
      data: "",
     categories: "",
     filter: 'All',
     amountOfItemsPerPage: 4,

    }
  }
  handleDelete = (event)=>{
    let father = event.target.parentNode
    let movieName = father.firstChild.innerText;
    let newMoviesArray = this.state.data.filter(element=>element.title !== movieName)
    const categories = this.categoriesMaker(newMoviesArray);
    this.setState({
        ...this.state,
         data: newMoviesArray,
        categories 
        })
  }
  categoriesMaker = (data)=>{
    const categories = data.map(element => element.category);
    const filteredCategories = categories.filter((val, index, arr) => {
      if (arr.indexOf(val) === index) {
        return val
      }
    })
    return filteredCategories;
  }
  async componentDidMount(){
   const data = await movies$;
   this.setState({
     ...this.state,
     data
   })
   const filteredCategories = this.categoriesMaker(this.state.data)
   
    this.setState({
      categories: filteredCategories
    })  
  
  }
  
  handleChangeCategory = event=>{
    this.setState({
      ...this.state,
      filter: event.target.value
    })
  }
  handleElementsAmount = event=>{
    this.setState({
      ...this.state,
      amountOfItemsPerPage: parseInt(event.target.value) 
    })
  }
  render(){
    return(
      <div id="movies-app">
        <Categories
          onChange={this.handleChangeCategory}
          categories={this.state.categories} />
        <MoviesContainer 
        pagesAmount={Math.ceil(this.state.data.length / this.state.amountOfItemsPerPage)}
        elementsPerPage={this.state.amountOfItemsPerPage}
        elementsQuantity={this.state.data.length}> 
        
        {
        this.state.data.length > 0 ?
        this.state.filter==='All'?
          this.state.data.map((element, index)=>(
           <Item
            key={index} 
            title={element.title}
            category={element.category}
            likes={element.likes}
            dislikes={element.dislikes}>
             <Button 
              className='delete-button'
              name='delete' 
              onClick={this.handleDelete}/>
           <LikeDislikeButton/>
          </Item> 
        )):
        this.state.data.map((element,index)=>{
          if(element.category === this.state.filter){
           return(
             <Item
              key={index}
              title={element.title} 
              category={element.category}
              likes={element.likes}
              dislikes={element.dislikes}>
              <Button
              className='delete-button'
              name='delete'
              onClick={this.handleDelete} />
               <LikeDislikeButton />
             </Item>
             )
           }
        
        })
        
        :
        <h1>empty</h1>
        }
       </MoviesContainer>
        <InputElementsAmount 
        max={this.state.data.length}
        onChange={this.handleElementsAmount}
        value={this.state.amountOfItemsPerPage}/>
        
        </div>
    );
  }
}


export default Test;