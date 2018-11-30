import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import {
  TiMediaFastForwardOutline,
  TiMediaRewindOutline
} from "react-icons/ti";

import FilmCard from "./FilmCard";
import movies$ from "../movies";
import "./listFilm.css";
/**
 * options to select movies per page
 */
const options = [
  { value: 4, label: 4 },
  { value: 8, label: 8 },
  { value: 12, label: 12 }
];

class ListFilm extends Component {
  state = {
    filmList: [],
    categoriesObject: [{}],
    selectedCategories: [],
    loading: false,
    currentNumberPage: 1,
    filmsPerPage: [],
    nbFilmPerPage: 4
  };

  componentDidMount = () => {
    movies$.then(data => {
      this.setState({ filmList: data, loading: true }, () =>
        this.getMoviesPerPage()
      );
    });
  };

  /**
   * delete a movie
   */
  handelDelete = film => {
    this.setState(
      previousState => ({
        filmList: [...previousState.filmList.filter(e => e.id !== film.id)]
      }),
      () => this.getMoviesPerPage()
    );
  };

  /**
   * like a movie
   */
  handleLike = (film, isLiked) => {
    if (isLiked) {
      const NewLikesFilm = {
        id: film.id,
        title: film.title,
        category: film.category,
        likes: film.likes + 1,
        dislikes: film.dislikes
      };
      this.setState(previousState => ({
        filmList: [
          ...previousState.filmList.filter(e => e.id !== film.id),
          NewLikesFilm
        ],

        filmsPerPage: previousState.filmsPerPage.map(e => {
          if (e.id === film.id) return NewLikesFilm;
          return e;
        })
      }));
    } else {
      const NewDislikesFilm = {
        id: film.id,
        title: film.title,
        category: film.category,
        likes: film.likes,
        dislikes: film.dislikes + 1
      };
      this.setState(previousState => ({
        filmList: [
          ...previousState.filmList.filter(e => e.id !== film.id),
          NewDislikesFilm
        ],
        filmsPerPage: previousState.filmsPerPage.map(e => {
          if (e.id === film.id) return NewDislikesFilm;
          return e;
        })
      }));
    }
  };

  /**
   * get a number movies per page
   */
  getMoviesPerPage = () => {
    const { currentNumberPage, nbFilmPerPage, filmList } = this.state;
    if (this.filmFilter().length !== 0) {
      const numberResultStart = (currentNumberPage - 1) * nbFilmPerPage;
      let numberResultEnd = currentNumberPage * nbFilmPerPage;
      if (numberResultEnd > this.filmFilter().length) {
        numberResultEnd = this.filmFilter().length;
      }
      const pageArray = this.filmFilter().slice(
        numberResultStart,
        numberResultEnd
      );
      this.setState(
        {
          filmsPerPage: pageArray
        },
        () => this.getCategories()
      );
    } else {
      const numberResultStart = (currentNumberPage - 1) * nbFilmPerPage;
      let numberResultEnd = currentNumberPage * nbFilmPerPage;
      if (numberResultEnd > filmList.length) {
        numberResultEnd = filmList.length;
      }
      const pageArray = filmList.slice(numberResultStart, numberResultEnd);
      this.setState(
        {
          filmsPerPage: pageArray
        },
        () => this.getCategories()
      );
    }
  };

  /**
   * get  table of the categories selected by the user
   */
  getSelectdCategories = () => {
    const { filmList, selectedCategories } = this.state;
    const categories = [];
    let newSelectedCategories = [];
    const myCategories = filmList
      .map(film => film.category)
      .filter(category => !categories.includes(category));
    newSelectedCategories = selectedCategories.filter(category =>
      myCategories.includes(category.value)
    );
    this.setState({ selectedCategories: newSelectedCategories });
  };

  /**
   * get categories
   */
  getCategories = () => {
    this.getSelectdCategories();
    const { filmList } = this.state;
    const selectedCategories = [];
    const categoriesObject = [{}];
    filmList
      .map(film => film.category)
      .filter(category => {
        if (!selectedCategories.includes(category)) {
          selectedCategories.push(category);
          categoriesObject.push({ value: category, label: category });
        }
        return category;
      });
    this.setState({ categoriesObject });
  };

  /**
   * filter all the movies to render the result to the user
   * depending in the selected categories
   */
  filmFilter = () => {
    const { filmList, selectedCategories } = this.state;
    const myOptions = selectedCategories.map(option => option.value);
    if (selectedCategories.length !== 0) {
      return filmList.filter(film => myOptions.includes(film.category));
    }

    return filmList;
  };

  /**
   * Go to the previous page
   */
  handlerButtonPrevious = () => {
    const { currentNumberPage } = this.state;
    if (currentNumberPage > 1) {
      this.setState(
        {
          currentNumberPage: currentNumberPage - 1,
          filmsPerPage: []
        },
        () => this.getMoviesPerPage()
      );
    }
  };

  /**
   * Go to the next page
   */
  handlerButtonNext = () => {
    const { currentNumberPage, nbFilmPerPage } = this.state;
    if (this.filmFilter().length / nbFilmPerPage > currentNumberPage) {
      this.setState(
        {
          currentNumberPage: currentNumberPage + 1,
          filmsPerPage: []
        },
        () => this.getMoviesPerPage()
      );
    }
  };

  /**
   * event selection number per page
   */
  handleChange = selectedOption => {
    this.setState(
      { nbFilmPerPage: selectedOption.value, currentNumberPage: 1 },
      () => this.getMoviesPerPage()
    );
  };

  /**
   * event selection categories
   */
  handleChangeCategory = selectedOption => {
    this.setState(
      { selectedCategories: selectedOption, currentNumberPage: 1 },
      () => this.getMoviesPerPage()
    );
  };

  render() {
    const {
      loading,
      filmList,
      categoriesObject,
      selectedCategories,
      filmsPerPage,
      nbFilmPerPage
    } = this.state;

    if (loading && filmList.length !== 0) {
      return (
        <div className="LisFilm">
          <h1>Available Movies</h1>
          <div className="select">
            <Select
              name="categories"
              placeholder="select categories"
              value={selectedCategories}
              onChange={this.handleChangeCategory}
              options={categoriesObject}
              isMulti
            />
          </div>
          <div className="select">
            <Select
              name="pages"
              placeholder="movies per page"
              value={nbFilmPerPage}
              onChange={this.handleChange}
              options={options}
            />
          </div>
          <div className="ListCards">
            {filmsPerPage.map(film => (
              <div key={film.id} className="FilmCard">
                <FilmCard
                  key={film.id}
                  id={film.id}
                  title={film.title}
                  category={film.category}
                  likes={film.likes}
                  dislikes={film.dislikes}
                  handelDelete={this.handelDelete}
                  handleLike={this.handleLike}
                />
              </div>
            ))}
          </div>
          <TiMediaRewindOutline
            className="previous"
            size={40}
            onClick={this.handlerButtonPrevious}
          />
          <TiMediaFastForwardOutline
            className="next"
            size={40}
            onClick={this.handlerButtonNext}
          />
        </div>
      );
    }
    return (
      <div className="loading">
        <ClipLoader sizeUnit="px" size={50} color="#123abc" loading={loading} />
      </div>
    );
  }
}

export default ListFilm;
