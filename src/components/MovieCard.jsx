import { Card, CardBody, CardImg } from 'shards-react';

const MovieCard = ({ movie, movieCardKey }) => {
    return (
        <Card key={ movieCardKey }>
            <CardImg top src='' />
            <CardBody>
                <h5>{ movie.title }</h5>
            </CardBody>
        </Card>
    )
}

export default MovieCard;