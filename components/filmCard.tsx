import Card from "../interfaces/Card";
import LikesBar from "./likesBar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Dispatch, useRef } from "react";
import { BsTrash } from "react-icons/bs";

interface FilmCardProps {
  card: Card;
  cards: Array<Card>;
  cardsToShow: Array<Card>;
  setCards: Dispatch<React.SetStateAction<Array<Card>>>;
}

const FilmCard = ({ card, cards, setCards, cardsToShow }: FilmCardProps) => {
  const likeState = useRef("neutral");

  const onClickLike = () => {
    const newCards = [...cards];
    const targetCard = newCards.find((curCard) => curCard.id === card.id);
    if (targetCard && likeState.current !== "like") targetCard.likes++;
    if (targetCard && likeState.current !== "like" && targetCard.dislikes)
      targetCard.dislikes--;
    likeState.current = "like";
    setCards(newCards);
  };

  const onClickDislike = () => {
    const newCards = [...cards];
    const targetCard = newCards.find((curCard) => curCard.id === card.id);
    if (targetCard && likeState.current !== "dislike" && targetCard.likes)
      targetCard.likes--;
    if (targetCard && likeState.current !== "dislike") targetCard.dislikes++;
    likeState.current = "dislike";
    setCards(newCards);
  };

  const onClickDelete = () => {
    setCards((oldCards: Array<Card>) => {
      return oldCards.filter((curCard) => curCard.id !== card.id);
    });
  };

  return (
    <div
      style={{ width: 300, height: 140 }}
      className="border p-4 rounded-lg border-gray-700 bg-gray-700 text-gray-200 flex flex-col justify-between items-center space-y-4"
    >
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between w-full ">
          <div />
          <div>
            <h1 className="font-bold text-lg">{card.title}</h1>
          </div>
          <div>
            <div onClick={onClickDelete}>
              <BsTrash className="cursor-pointer" size={18} />
            </div>
          </div>
        </div>
        <h2 className="text-base italic">{card.category}</h2>
      </div>
      <div className="w-full flex justify-center flex-col items-center space-y-1 ">
        <LikesBar likes={card.likes} dislikes={card.dislikes} />
        <div className="flex w-4/5 justify-between">
          <div onClick={onClickLike}>
            <AiOutlineLike size={20} className="cursor-pointer" />
          </div>
          <div onClick={onClickDislike}>
            <AiOutlineDislike size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
