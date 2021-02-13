import { Container, FormCheckbox } from 'shards-react';

const MoviesFilter = ({ categories }) => {
    const categoriesList = categories.map((category, index) => {
        return (
            <FormCheckbox 
                key={index}
                checked={true}
            >
                {category}
            </FormCheckbox>
        );
    });

    return (
        <Container id="movies-filter">
            <p>Filter categories:</p>
            { categoriesList }
        </Container>
    );
}

export default MoviesFilter;