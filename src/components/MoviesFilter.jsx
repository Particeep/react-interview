import { Container, FormCheckbox } from 'shards-react';

const MoviesFilter = ({ categories }) => {
    const categoriesList = categories.map((category, index) => {
        return (
            <FormCheckbox 
                key={index}
            >
                {category}
            </FormCheckbox>
        );
    });

    return (
        <Container id="categories-list">
            <p>Filter categories:</p>
            { categoriesList }
        </Container>
    );
}

export default MoviesFilter;