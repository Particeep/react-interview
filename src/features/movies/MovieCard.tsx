import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';

import { Button, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIconActive from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIconActive from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
    Movie, 
    removeMovie,
    likeMovie,
    unlikeMovie,
    dislikeMovie,
    undislikeMovie,
} from './movieSlice';

const MovieCard = (props: { info: Movie }) => {
    const dispatch = useDispatch();
    
    const {
        id,
        title,
        dislikes,
        likes,
        category,
        image
    } = props.info;

    const { 
        likedMovies,
        dislikedMovies,
    } = useSelector((state: RootState) => state.movies);

    const isLiked = likedMovies.includes(id)
    const isDisliked = dislikedMovies.includes(id)
    
    return(
        <Card sx={{backgroundColor: 'rgb(45,45,45)', color: '#fff'}}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1" display="block" gutterBottom>
                    {category}
                </Typography>
                <Grid container xs={12}>
                    <Grid item xs={3} md={7}>
                        <Typography variant="h6" component="div">
                            Summary
                        </Typography>
                    </Grid>
                    <Grid item xs={3} md={5}>
                        <Button
                            startIcon={isLiked ? <ThumbUpIconActive  fontSize="inherit"/> : <ThumbUpIcon  fontSize="inherit"/>}
                            color="secondary"
                            size="small"
                            onClick={() => isLiked ? 
                                dispatch(unlikeMovie({
                                    id,
                                    changes: { likes: likes-1 }
                                })) : 
                                dispatch(likeMovie({
                                    id,
                                    changes: { likes: likes+1 }
                                }))
                            }
                        >
                             {likes}
                        </Button>
                        <Button
                            startIcon={isDisliked ? <ThumbDownIconActive  fontSize="inherit"/> : <ThumbDownIcon  fontSize="inherit"/>} 
                            color="secondary"
                            size="small"
                            onClick={() => isDisliked ? 
                                dispatch(undislikeMovie({
                                    id,
                                    changes: { dislikes: dislikes - 1 }
                                })) : 
                                dispatch(dislikeMovie({
                                    id,
                                    changes: { dislikes: dislikes+1 }
                                }))
                            }
                        >
                            {dislikes}
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body1" sx={{fontSize: '.8rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
            </CardContent>  
            <CardActions disableSpacing>
                <IconButton
                    color="secondary"
                    size="small"
                    onClick={() => dispatch(removeMovie(id))}
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MovieCard;