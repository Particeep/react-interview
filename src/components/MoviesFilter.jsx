import { useEffect } from 'react';
import { Container, FormCheckbox } from 'shards-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies, setCheckedCategories } from '../store/actions'

const MoviesFilter = ({ 
    filterMovies, 
    setCheckedCategories,
    movies, 
    categories, 
    checkedCategories
}) => {

    useEffect(() => {
        let cat = !checkedCategories.length ? categories : checkedCategories;
        filterMovies(movies, cat);
    }, [checkedCategories]);

    const categoriesList = categories.map((category, index) => {
        return (
            <FormCheckbox 
                key={index}
                checked={checkedCategories.includes(category)}
                onChange={ (e) => handleFilter(e, category) }
            >
                {category}
            </FormCheckbox>
        );
    });

    const handleFilter = (e, category) => {
        setCheckedCategories(category);
    }

    return (
        <Container id="movies-filter">
            <p>Filter categories:</p>
            { categoriesList }
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        checkedCategories: state.checkedCategoriesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterMovies: bindActionCreators(filterMovies, dispatch),
        setCheckedCategories: bindActionCreators(setCheckedCategories, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFilter);