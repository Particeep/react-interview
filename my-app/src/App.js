import './App.css';
import React, {useState, useEffect} from 'react';
import MoviesList from './components/MoviesList';
import {movies$} from './movies';

function App() {

    const [numberPerPage, setNumberPerPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryList, setCategoryList] = useState([])
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        movies$.then(res=>{
            let categoryList = res.map(el => el.category)
            let filteredList = categoryList.filter((el,id)=>categoryList.indexOf(el)===id)
            setCategoryList(filteredList)
            setNumberPerPage(res.length)
        })
    }, [])
    const handleChange = (e) => {
      setFilter(Array.from(e.target.selectedOptions, (item) => item.value))
    }
    const handleClear = () => {
      setFilter([])
    }

  return (
    <div className="App">
      <h1>Movies Recommendations</h1>
      <div className='category-list'>
        <form>
            <label for={filter}>Choose one or many categories:</label>
                <select multiple value={filter} onChange={(e)=>handleChange(e)}>
                {categoryList.map((el,id)=>{
                    return (
                        <option key={id} value={el} >{el}</option>
                    )
                })}
                </select>
        </form>
        <button className='clear-filter' onClick={()=>handleClear()}>Clear Filter</button>
        </div>
      <div className='page-number'>
        <div className='number'>
        <p>Results per page:
          <span onClick={()=>setNumberPerPage(4)}>4</span> 
          <span onClick={()=>setNumberPerPage(8)}>8</span>
          <span onClick={()=>setNumberPerPage(12)}>12</span>
        </p>
        </div>
        <div className='page' >
          <p className='text'>Page</p>
          <p onClick={()=>{if(currentPage>1) setCurrentPage(currentPage-1)}}>Previous</p>
          <p>{currentPage}</p>
          <p onClick={()=>{setCurrentPage(currentPage+1)}}>Next</p>
        </div>
      </div>
      <MoviesList filter={filter} display={numberPerPage} page={currentPage}/>
    </div>
  );
}

export default App;
