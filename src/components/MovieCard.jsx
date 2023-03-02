import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Box } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieCard = ({ title, category,img, likes, dislikes, isLiked, onDelete, onToggleLike }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleToggleLike = () => {
    onToggleLike(title);
  };

  return (
    <Card sx={{ 
      height: '100%',
      boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.2)',
    }}>
      <CardContent>
     
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <img src={img} alt={title} style={{ height: '300px',width: '230px' }} />
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ThumbUpIcon
            sx={{ mr: 1 }}
            color={isLiked ? 'primary' : 'action'}
            onClick={handleToggleLike}
          />
          <Typography variant="body2" color="text.secondary">
            {likes} likes / {dislikes} dislikes
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
