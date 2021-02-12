import { Card, CardBody, CardImg } from 'shards-react';

const MovieCard = ({ imgSrc, title }) => {
    return (
        <Card>
            <CardImg top src={ imgSrc } />
            <CardBody>
                <h3>{ title }</h3>
            </CardBody>
        </Card>
    )
}

export default MovieCard;