import './App.css';
import React, {useState, useEffect} from 'react';
import MoviesList from './components/MoviesList';
import {movies$} from './movies';

function App() {
   const [categoryList, setCategoryList] = useState([])
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        movies$.then(res=>{
            let categoryList = res.map(el => el.category)
            let filteredList = categoryList.filter((el,id)=>categoryList.indexOf(el)===id)
            setCategoryList(filteredList)
        })
    }, [])
    const handleClick = (id) => {
        setFilter([...filter,categoryList[id]])
    }
    const handleSubmit = () => {
        
    }
  return (
    <div className="App">
      <div className='category-list'>
        <form onSubmit={handleSubmit()}>
            <label for="categories">Choose one or many categories:</label>
                <select name={filter} id='options' multiple>
                {categoryList.map((el,id)=>{
                    return (
                        <option value={el} onClick={()=>{handleClick(id)}}>{el}</option>
                    )
                })}
                </select>
            <input type='submit' value='search'/>
        </form>
        </div>
      <MoviesList />
    </div>
  );
}

export default App;
