import { Button, Icon, Modal } from 'semantic-ui-react';
import {
  Category,
  CategoryWrapper,
  DeleteMovieButton,
  DeleteWrapper,
  DislikeIcon,
  DislikeWrapper,
  LikeIcon,
  LikeWrapper,
  ModalConfirmation,
  MovieCard,
  ReactionWrapper,
  Title,
  TotalReaction
} from './Styled';
import React, { useState } from 'react';
import { faHeart, faHeartBroken, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteMovie } from '../../../business/actions/moviesActions';
import { useDispatch } from 'react-redux';

const Card = ({ movie }) => {
  const [numberLike, setNumberLike] = useState(movie.likes);
  const [numberDislike, setNumberDislike] = useState(movie.dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const likeMovie = () => {
    if (!isLiked && !isDisliked) {
      setIsLiked(true);
      setNumberLike(numberLike + 1);
    } else if (!isLiked && isDisliked) {
      setIsLiked(true);
      setIsDisliked(false);
      setNumberLike(numberLike + 1);
      setNumberDislike(numberDislike - 1);
    }
  };

  const dislikeMovie = () => {
    if (!isLiked && !isDisliked) {
      setIsDisliked(true);
      setNumberDislike(numberDislike + 1);
    } else if (isLiked && !isDisliked) {
      setIsLiked(false);
      setIsDisliked(true);
      setNumberLike(numberLike - 1);
      setNumberDislike(numberDislike + 1);
    }
  };

  const handleDeleteMovie = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(movie.id));
  };

  const renderTitle = (movie) => {
    const title = movie;
    if (movie.length > 16) {
      movie = movie.substr(0, 13).concat('...');
    }
    return <Title title={title}>{movie}</Title>;
  };

  const renderCategory = () => (
    <CategoryWrapper>
      <Category>{movie.category}</Category>
    </CategoryWrapper>
  );

  const renderLike = () => (
    <LikeWrapper>
      <LikeIcon
        icon={faHeart}
        onClick={() => likeMovie()}
        style={{ color: !isLiked ? 'black' : 'green' }}
        title="Liker ce film"
        border
      />
      <TotalReaction>{numberLike}</TotalReaction>
    </LikeWrapper>
  );

  const renderDislike = () => (
    <DislikeWrapper>
      <DislikeIcon
        icon={faHeartBroken}
        onClick={() => dislikeMovie()}
        style={{ color: !isDisliked ? 'black' : 'red' }}
        title="Disliker ce film"
        border
      />
      <TotalReaction>{numberDislike}</TotalReaction>
    </DislikeWrapper>
  );

  const openConfirmationModal = () => setOpenModal(true);

  const deleteConfirm = (e) => {
    setOpenModal(!openModal);
    handleDeleteMovie(e);
  };

  const renderConfirmationModal = (titre) => (
    <ModalConfirmation size={'mini'} open={openModal} onClose={() => dispatch({ type: 'close' })}>
      <Modal.Content>
        <p>Etes vous sur de vouloir supprimer {titre} ?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpenModal(false)}>
          No
        </Button>
        <Button positive onClick={(e) => deleteConfirm(e)}>
          Yes
        </Button>
      </Modal.Actions>
    </ModalConfirmation>
  );

  return (
    <>
      <MovieCard>
        {renderTitle(movie.title)}
        {renderCategory()}
        <ReactionWrapper>
          {renderLike()}
          {renderDislike()}
        </ReactionWrapper>
        <DeleteWrapper>
          <DeleteMovieButton onClick={openConfirmationModal}>
            <FontAwesomeIcon icon={faTrash} />
          </DeleteMovieButton>
        </DeleteWrapper>
      </MovieCard>
      {renderConfirmationModal(movie.title)}
    </>
  );
};

export default Card;
