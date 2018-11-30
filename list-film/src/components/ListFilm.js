import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import FilmCard from "./FilmCard";
import { movies$ } from "../movies";
import "./listFilm.css";

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

  handelDelete = film => {
    this.setState(
      previousState => ({
        filmList: [...previousState.filmList.filter(e => e.id !== film.id)]
      }),
      () => this.getMoviesPerPage()
    );
  };

  handelLike = (film, stateChild) => {
    // const { isLiked } = stateChild;
    if (stateChild) {
      // film.likes += 1;
      console.log("one like", film.likes);

      const { likes, dislikes } = film;

      this.setState(previousState => ({
        filmList: previousState.filmList.map(e => {
          if (e.id === film.id)
            return {
              category: film.category,
              title: film.title,
              id: film.id,
              likes: likes + 1,
              dislikes
            };
          return e;
        })
      }));
      // this.setState(previousState => ({
      //   filmList: [
      //     ...previousState.filmList.filter(e => e.id !== film.id),
      //     { likes: [likes + 1], dislikes }
      //   ]
      // }));
    } else {
      const { likes, dislikes } = film;
      console.log(likes);
      this.setState(previousState => ({
        filmList: previousState.filmList.map(movie => {
          if (movie.id === film.id)
            return {
              category: film.category,
              title: film.title,
              id: film.id,
              likes,
              dislikes: dislikes + 1
            };
          return movie;
        })
      }));
      // this.setState(previousState => ({
      //   filmList: [
      //     ...previousState.filmList.filter(e => e.id !== film.id),
      //     { likes, dislikes: dislikes + 1 }
      //   ]
      // }));
    }
  };

  getMoviesPerPage = () => {
    //	this.getSelectdCategories()
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
      console.log("mes films ", pageArray);
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
      console.log("mes films ", pageArray);
      this.setState(
        {
          filmsPerPage: pageArray
        },
        () => this.getCategories()
      );
    }
  };

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

  filmFilter = () => {
    const { filmList, selectedCategories } = this.state;
    const myOptions = selectedCategories.map(option => option.value);
    if (selectedCategories.length !== 0) {
      return filmList.filter(film => myOptions.includes(film.category));
    }

    return filmList;
  };

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

  handleChange = selectedOption => {
    this.setState(
      { nbFilmPerPage: selectedOption.value, currentNumberPage: 1 },
      () => this.getMoviesPerPage()
    );
  };

  handleChangeCategory = selectedOption => {
    this.setState({ selectedCategories: selectedOption }, () =>
      this.getMoviesPerPage()
    );
  };

  render() {
    const {
      loading,
      filmList,
      categoriesObject,
      selectedCategories,
      currentNumberPage,
      filmsPerPage,
      nbFilmPerPage
    } = this.state;

    if (loading && filmList.length !== 0) {
      return (
        <div>
          <div className="ListFilm">
            {filmsPerPage.map(film => (
              <div key={film.id} className="FilmCard">
                <FilmCard
                  key={film.id}
                  film={film}
                  handelDelete={this.handelDelete}
                  handelLike={this.handelLike}
                />
              </div>
            ))}
          </div>
          <button type="submit" onClick={this.handlerButtonPrevious}>
            {"\u003C"}
          </button>
          {currentNumberPage}
          <button type="submit" onClick={this.handlerButtonNext}>
            {"\u003E"}
          </button>
          <Select
            name="nbFilmPerPage"
            value={nbFilmPerPage}
            onChange={this.handleChange}
            options={options}
          />
          <Select
            value={selectedCategories}
            onChange={this.handleChangeCategory}
            options={categoriesObject}
            isMulti
          />
        </div>
      );
    }
    return (
      <div className="sweet-loading">
        <ClipLoader
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={loading}
        />
      </div>
    );
  }
}

export default ListFilm;
