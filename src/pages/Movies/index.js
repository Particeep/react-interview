import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDislike, AiOutlineLike, AiFillDelete } from "react-icons/ai";

import {
  Card,
  Category,
  MoviesContainer,
  Container,
  Footer,
  Header,
  Icons,
  Image,
  Section,
  Title,
  DeleteButton,
  MultiSelectContainer,
} from "./style";
import {
  getMoviesSelector,
  getCategoriesSelector,
  getSelectedcategoriesSelector,
} from "../../store/movies/selectors";
import {
  deleteMovieRequest,
  fetchCategoriesRequest,
  fetchMoviesRequest,
  setSelectedCategories,
} from "../../store/movies/actions";
import { Toggle } from "../../components/ToggleButton";
import Pagination from "../../components/Pagination";
import RotatingLines from "../../components/LoadingSpinner";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const { movies, pending, error } = useSelector(getMoviesSelector);
  const selectedCategories = useSelector(getSelectedcategoriesSelector);

  useEffect(() => {
    dispatch(fetchMoviesRequest({ categories: selectedCategories }));
  }, [dispatch, selectedCategories]);

  const onDelete = (id) => {
    dispatch(deleteMovieRequest({ id, selectedCategories }));
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((currentPage) =>
      Math.min(currentPage + 1, Math.ceil(movies.length / perPage))
    );
  };

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage;
    const lastPageIndex = firstPageIndex + perPage;
    return movies?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, perPage, movies]);

  return (
    <MoviesList
      pending={pending}
      total={movies?.length}
      movies={movies}
      error={error}
      onDelete={onDelete}
      setPage={setPage}
      perPage={perPage}
      setPerPage={setPerPage}
      currentPage={currentPage}
      nextPage={nextPage}
      currentData={currentData}
      previousPage={previousPage}
    />
  );
};

const MoviesList = ({
  pending,
  movies = [],
  error,
  onDelete,
  setPage,
  perPage,
  nextPage,
  previousPage,
  currentPage,
  currentData,
  setPerPage,
}) => {
  return (
    <Container>
      {pending ? (
        <RotatingLines />
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <CategoriesSelector />
          <MoviesContainer>
            {currentData.map(({ id, title, category, likes, dislikes }) => (
              <Movie
                key={id}
                id={id}
                title={title}
                category={category}
                likes={likes}
                dislikes={dislikes}
                onDelete={onDelete}
              />
            ))}
          </MoviesContainer>
          <Pagination
            perPage={perPage}
            total={movies?.length}
            setPage={setPage}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
            setPerPage={setPerPage}
          />
        </>
      )}
    </Container>
  );
};

const Movie = ({ id, title, category, likes, dislikes, onDelete }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Card>
      <Header>
        <Toggle
          label={liked ? "Liked" : "Disliked"}
          toggled={liked}
          onClick={setLiked}
        />
        <DeleteButton onClick={() => onDelete(id)}>
          <AiFillDelete size={25} />
        </DeleteButton>
      </Header>
      <Image src={`assets/${id}.jpeg`} alt=""></Image>
      <Footer>
        <Section>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Section>
        <Icons>
          <AiOutlineLike size={20} />
          {likes} | {dislikes}
          <AiOutlineDislike size={20} />
        </Icons>
      </Footer>
    </Card>
  );
};

const CategoriesSelector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  const { categories } = useSelector(getCategoriesSelector);
  const selectedCategories = useSelector(getSelectedcategoriesSelector);

  const onSelectCategories = (categories) => {
    dispatch(
      setSelectedCategories({
        selectedCategories: categories?.map((c) => c.value),
      })
    );
  };
  return (
    <MultiSelectContainer>
      <Select
        isMulti
        defaultValue={selectedCategories.map((c) => ({ label: c, value: c }))}
        name="colors"
        options={categories?.map((category) => ({
          label: category,
          value: category,
        }))}
        placeholder="Sélectionner une catégorie"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onSelectCategories}
      />
    </MultiSelectContainer>
  );
};

export default MoviesPage;
