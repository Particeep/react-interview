import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList';


class App extends Component {
  state = {
    filterCategory : 'All'
  }

  handleFilter = (event) => {
    this.setState({
      filterCategory : event.target.value
    })
  }


  render() {
    return (
      <div className="container" >
      <h1>Thomas Petit</h1>
        <div className="filter-container">
          <label htmlFor="filter">Filter</label> 
          <select onChange={this.handleFilter} id="filter">
            <option value="All">All</option> 
            <option value="Comedy">Comedy</option> 
            <option value="Animation">Animation</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        
        <MoviesList filter={this.state.filterCategory}/>
      </div>
    );
  }
}

export default App;
