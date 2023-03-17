import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);
const MotionTypography = motion(Typography);

const MovieCard = ({
  id,
  title,
  category,
  img,
  likes,
  dislikes,
  isLiked,
  isDisliked,
  onDelete,
  onToggleLike,
  onToggleDisLike
}) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleToggleLike = () => {
    onToggleLike(id);
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} animate={{ scale: 1 }}>
      <MotionCard
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          height: "100%",
          boxShadow: "4px 4px 8px 4px rgba(0,0,0,0.2)",
        }}
      >
        <MotionCardContent>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="h5"
            gutterBottom
          >
            {title}
          </MotionTypography>
          <Box sx={{ width: 200 }}>
            <img
              src={img}
              alt={title}
              style={{
                height: "300px",
                width: "230px",
              }}
            />
          </Box>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            {category}
          </MotionTypography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThumbUpIcon
              sx={{ mr: 1, cursor: "pointer" }}
              color={isLiked ? "primary" : "action"}
              onClick={handleToggleLike}
            />
             <ThumbDownIcon
              sx={{ mr: 1, cursor: "pointer" }}
              color={isDisliked ? "primary" : "action"}
              onClick={onToggleDisLike}
            />
            <MotionTypography
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              variant="body2"
              color="text.secondary"
            >
              {likes} likes / {dislikes} dislikes
            </MotionTypography>
          </Box>
        </MotionCardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </MotionCard>
    </motion.div>
  );
};

export default MovieCard;
