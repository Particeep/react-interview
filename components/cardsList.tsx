import { Fragment } from "react";
import Card from "../interfaces/Card";
import FilmCard from "./filmCard";
import { Dispatch } from "react";

interface CardsListProps {
  cards: Array<Card>;
  setCards: Dispatch<React.SetStateAction<Array<Card>>>;
  cardsToShow: Array<Card>;
}

const CardsList = ({ cards, setCards, cardsToShow }: CardsListProps) => {
  return (
    <div className="flex flex-wrap justify-center h-full overflow-auto scrollbar-thumb-slate-300 scrollbar-thin">
      {cardsToShow.map((card) => (
        <div key={card.id} className="mt-4 mr-4">
          <FilmCard
            cardsToShow={cardsToShow}
            setCards={setCards}
            cards={cards}
            card={card}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
