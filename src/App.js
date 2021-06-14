import React, {useState, useEffect} from 'react';
import MoviesForm from './components/MoviesForm';
import { movies$ } from './assets/movies';


function App() {
  const [movies, setMovies] = useState([])


    useEffect(()=>{
        async function fetchData(){
            await movies$.then(response=>{
                setMovies(response)
            }).catch(error=>{
              console.log(error)
            })
        }
        fetchData();
    },[])  

  
  
    
  return (
    <div className="bg-gray-100">
        <MoviesForm setMovies={setMovies} movies={movies}/>
    </div>
  );
}

export default App;
