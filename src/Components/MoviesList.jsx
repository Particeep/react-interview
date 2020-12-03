import React, { useEffect, useState } from "react";
import { movies$ } from '../movies';
import Card from "./Card";


function MoviesList() {
    const [movies, updateMovies] = useState([]);
    const [loading, updateLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [activeCategory, setActiveCategory] = useState([]);

    useEffect(() => {
        movies$.then(movies => { updateMovies(movies) });
        updateLoading(false);
        getMoviesCategory(movies);
    }, []);

    useEffect(() => {
        getMoviesCategory(movies);
    }, [movies]);

    const getMoviesCategory = (movies) => {
        const distinctCategories = [...new Set(movies.map(m => m.category))]
        setCategory(distinctCategories);
    }

    const handleDelete = (movie) => {
        const updateMovieList = movies.filter(mov => mov.id !== movie.id);
        updateMovies(updateMovieList);
        alert(movie.title + ' is deleted successfully');
    }

    const onFilterChange = (cat) => {
        if (activeCategory.includes(cat)) {
            const filterIndex = activeCategory.indexOf(cat);
            const newFilter = [...activeCategory];
            newFilter.splice(filterIndex, 1);
            setActiveCategory(newFilter)
        } else {
            setActiveCategory([...activeCategory, cat])
        }
    }

    let filteredList;

    if (
        activeCategory.length === 0 ||
        activeCategory.length === category.length
    ) {
        filteredList = movies;
    } else {
        filteredList = movies.filter(movie =>
            activeCategory.includes(movie.category)
        );
    }

    if (loading) {
        return (<div>Loading..........</div>)
    }
    return (

        <div>
            <div className='h1 movie-Header'>List of Movies</div>
            <div className='border border-light rounded mb-4 bg-light'>
                <div className='filterTitle'>Filter Movies By Categories:</div>
                <form>
                    {category.map(cat => (
                        <div className='category-Filter form-check'>
                            <label >{cat}</label>
                            <input
                                type="checkbox"
                                className='ml-4 mr-4'
                                checked={activeCategory.includes(cat)}
                                onChange={() => onFilterChange(cat)}
                            />
                        </div>
                    ))}
                </form>
            </div>
            <div className='row'>

                {filteredList.length !== 0 ? filteredList.map(movie =>
                    (<div className='col-md-4'>
                        <Card key={movie.id} movie={movie}
                            onDelete={handleDelete}
                        />
                    </div>))
                    : <div className='col-md-12 text-center h2 m-8 p-10 bg-info text-warning'>No movies</div>}
            </div>
        </div>
    )
}

export default MoviesList;
