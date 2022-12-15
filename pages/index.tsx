import { useEffect, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import CardsList from "../components/cardsList";
import PagePicker from "../components/pagePicker";
import Card from "../interfaces/Card";
import { movies$ as movies } from "../movies";

export default function Home() {
  const [cards, setCards] = useState<Array<Card>>([]);
  const [cardsToShow, setCardsToShow] = useState<Array<Card>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filmsPerPage, setFilmsPerPage] = useState(4);
  const [categories, setCategories] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [targetCategories, setTargetCategories] = useState<Array<string>>([]);
  const pageOptions = [
    { value: 4, label: 4 },
    { value: 8, label: 8 },
    { value: 12, label: 12 },
  ];

  const fetchCards = async () => {
    const cards = await movies;
    setCards(cards);
  };

  const setOptions = () => {
    const categoriesList: Array<string> = [];
    cards.forEach((card) => {
      if (categoriesList.includes(card.category) === false) {
        categoriesList.push(card.category);
      }
    });
    setCategories(
      categoriesList.map((category) => ({
        value: category.toLowerCase(),
        label: category,
      }))
    );
  };

  const onChangeSelectFilms = (
    selectedNumber: SingleValue<{ value: number; label: number }>
  ) => {
    if (selectedNumber) setFilmsPerPage(selectedNumber.value);
    setCurrentPage(0);
  };

  const onChangeSelectCategories = (
    selectedCategories: MultiValue<{ value: string; label: string }>
  ) => {
    if (selectedCategories && selectedCategories.length) {
      setTargetCategories(
        selectedCategories.map(
          (category: SingleValue<{ value: string; label: string }>) => {
            if (category) return category.label;
            else return "unknown";
          }
        )
      );
      setCurrentPage(0);
    } else {
      setTargetCategories([]);
    }
  };

  useEffect(() => {
    setCardsToShow(
      cards.filter(
        (card) =>
          targetCategories.includes(card.category) ||
          targetCategories.length === 0
      )
    );
  }, [targetCategories]);

  useEffect(() => {
    setOptions();
    setCardsToShow(
      cards.filter(
        (card) =>
          targetCategories.includes(card.category) ||
          targetCategories.length === 0
      )
    );
  }, [cards]);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex flex-col p-12 bg-gray-900 h-screen space-y-4">
      <div className="flex mx-auto w-full space-x-4 justify-center">
        <div className="w-1/4">
          <Select
            onChange={onChangeSelectCategories}
            placeholder="Categories"
            options={categories}
            isMulti={true}
          />
        </div>
        <div className="w-1/12">
          <Select
            onChange={onChangeSelectFilms}
            placeholder="Films / page"
            options={pageOptions}
          />
        </div>
      </div>
      <div className="border rounded-lg border-gray-700 flex flex-col space-y-6 p-4 bg-gray-800 h-2/3">
        <CardsList
          setCards={setCards}
          cardsToShow={cardsToShow.slice(
            currentPage * filmsPerPage,
            currentPage * filmsPerPage + filmsPerPage
          )}
          cards={cards}
        />
        <PagePicker
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfPages={Math.ceil(cardsToShow.length / filmsPerPage)}
        />
      </div>
    </div>
  );
}
