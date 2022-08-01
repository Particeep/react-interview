import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';

export const MovieCard = styled.div`
  background-color: #ffffff;
  border: 7px solid lightgrey;
  height: 200px
  box-shadow: 0 0 16px #0000002e;
  border-radius: 16px;
  overflow: hidden;
  margin: 50px;
  padding: 6px;
  width: 180px;
`;

export const Title = styled.p`
  font-size: 23px;
  font-weight: 800;
  margin: 1px;
  white-space: nowrap;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1px;
`;

export const Category = styled.div`
  color: darkgrey;
  width: fit-content;
  margin: 5px 0 10px 0;
  font-style: italic;
`;

export const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 25px 0 5px;
  font-size: 20px;
`;

export const LikeIcon = styled(FontAwesomeIcon)`
  border-radius: 50px;
  border: 1px solid #ffffff;
  &:hover {
    cursor: pointer;
    border: 1px solid green;
  }
`;

export const DislikeIcon = styled(FontAwesomeIcon)`
  border-radius: 50px;
  border: 1px solid #ffffff;
  &:hover {
    cursor: pointer;
    border: 1px solid red;
  }
`;

export const DislikeWrapper = styled.div`
  display: flex;
  margin: 15px 5px 0 25px;
  flex-direction: column;
  font-size: 20px;
`;

export const TotalReaction = styled.p`
  color: #797272;
  margin-left: 5px;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const DeleteMovieButton = styled.button`
  color: white;
  background-color: #eb0c00;
  border: 1px solid #eb0c00;
  border-radius: 50px;
  font-size: 15px;
  width: 40px;
  height: 40px;
  right: 0;
  cursor: pointer;

  &:hover {
    color: lightgrey;
  }
`;

export const ModalConfirmation = styled(Modal)`
  top: 5px;
  right: 5px;
  position: fixed;
  background-color: yellow;
  padding: 5px;
  width: 200px;
`;
