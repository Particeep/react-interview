import { Container, FormCheckbox } from 'shards-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies } from '../store/actions'

const MoviesFilter = ({ categories, filterMovies }) => {
    let checkedCategories = [];
    const categoriesList = categories.map((category, index) => {
        return (
            <FormCheckbox 
                key={index}
                checked={checkedCategories.indexOf(category) + 1}
                onChange={ (e) => handleFilter(e, category) }
            >
                {category}
            </FormCheckbox>
        );
    });

    const handleFilter = (e, category) => {
        filterMovies(category);
    }

    return (
        <Container id="movies-filter">
            <p>Filter categories:</p>
            { categoriesList }
        </Container>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        filterMovies: bindActionCreators(filterMovies, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(MoviesFilter);