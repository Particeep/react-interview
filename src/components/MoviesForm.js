import React,{useState, useEffect} from 'react';
import MovieCard from './MovieCard'
import ReactPaginate from 'react-paginate';
import Categories from './Categories';

const MoviesForm =({movies, setMovies})=>{
    const [pageNumber,setPageNumber] = useState(0)
    const [pageNumberFiltered, setPageNumberFiltered] = useState(0)
    const moviesPerPage = 3;
    const pagesVisited = pageNumber * moviesPerPage;
    const pagesVisitedFiltered = pageNumberFiltered * moviesPerPage;
    const categories =[...new Set(movies.map(m=>m.category))] ;
    const[cat, setCategory] = useState("")    
    const [filtered, setFiltered] = useState(false)
    const moviesSliced = movies.slice(pagesVisited, pagesVisited+moviesPerPage)
    const moviesSlicedFiltered = movies.filter(m=>m.category===cat).slice(pagesVisitedFiltered,pagesVisitedFiltered+moviesPerPage)

    
    
    const handleDelete=(id)=>{
        const remainingMovies = movies.filter(m=>m.id!==id)
        setMovies(remainingMovies)
    }
    const handleChange =(e)=>{
        setCategory(e.target.value)
        e.target.value === "All" ? setFiltered(false): setFiltered(true)
    }
    
    const displayMovies = filtered ? moviesSlicedFiltered.map(movie=>{
        const {id} = movie;
        return (
            <div key={id}>
                         <MovieCard handleDelete={handleDelete} movie={movie} />
                    </div>
        )
    }):moviesSliced.map(movie=>{
        const {id} = movie;
        return (
            <div key={id}>
                         <MovieCard handleDelete={handleDelete} movie={movie} />
                    </div>
        )})

    const pageCount = filtered?Math.ceil(movies.filter(m=>m.category===cat).length/moviesPerPage):Math.ceil(movies.length/moviesPerPage)
    const handleChangePage = ({selected})=>{
        if(filtered){
            setPageNumberFiltered(selected);
        }
        else{
            setPageNumber(selected)
        }

    }
    return(
        <div className="items-center flex-col">
            <Categories handleChange={handleChange} cat={cat} setCategory={setCategory} categories={categories} />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {displayMovies}
        </div>
        <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handleChangePage}
            containerClassName = "bg-gray mr-40 ml-40  shadow-md px-4 py-3 m-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            previousClassName = "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200"
            nextClassName ="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200"
            />
        </div>
        
    )
}

export default MoviesForm