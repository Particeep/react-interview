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
    const handleChange = (e) => {
        console.log(e.target.selectedOptions)
        setFilter(Array.from(e.target.selectedOptions, (item) => item.value))
    }
    const handleSubmit = () => {
        console.log(filter)
    }
  return (
    <div className="App">
      <div className='category-list'>
        <form onSubmit={()=>handleSubmit()}>
            <label for={filter}>Choose one or many categories:</label>
                <select multiple value={filter} onChange={(e)=>handleChange(e)}>
                {categoryList.map((el,id)=>{
                    return (
                        <option key={id} value={el} >{el}</option>
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
