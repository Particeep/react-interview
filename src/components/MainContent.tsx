import * as React from 'react'
import { movies$ } from '../data/movies'
import MovieCard from './MovieCard'
import Settings from './Settings'
import PageSystem from './PageSystem'

interface MyProps {
}

type Movies = {
  id: string
  title: string
  category: string
  likes: number
  dislikes: number
  isLiked: boolean
  isDisliked: boolean
}[]

interface MyState {
  movies: Movies
  displayCount: number
  selectedCategories: string[]
  currentPage: number
}

class MainContent extends React.Component<MyProps, MyState> {
  constructor (props: Object) {
    super(props)
    this.state = {
      movies: [],
      displayCount: 12,
      selectedCategories: [],
      currentPage: 0
    }
    this.updateDisplayCount = this.updateDisplayCount.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.updateSelectedCategories = this.updateSelectedCategories.bind(this)
    this.filterMovies = this.filterMovies.bind(this)
    this.updateMovieLike = this.updateMovieLike.bind(this)
    this.updateMovieDislike = this.updateMovieDislike.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  componentDidMount () {
    movies$.then((data: any) => {
      this.setState({
        movies: data,
        selectedCategories: this.getCategories(data)
      })
    })
  }

  updatePage (page: number) {
    this.setState({
      currentPage: page
    })
  }

  updateDisplayCount (count: number) {
    if (count !== this.state.displayCount) {
      this.setState({
        displayCount: count,
        currentPage: 0
      })
    }
  }

  getCategories (movies: Movies) {
    return movies.map(movie => movie.category)
      .filter((cat, index, array) => {
        return array.indexOf(cat) >= index
      })
  }

  updateMovieLike (id: string, isLiked: boolean) {
    const updatedMovies: Movies = this.state.movies.map(movie => {
      if (movie.id === id) {
        if (movie.isDisliked) {
          movie.isDisliked = false
          movie.dislikes--
        }
        if (isLiked) {
          movie.isLiked = true
          movie.likes++
        } else {
          movie.isLiked = false
          movie.likes--
        }
      }
      return movie
    })

    this.setState({
      movies: updatedMovies
    })
  }

  updateMovieDislike (id: string, isDisliked: boolean) {
    const updatedMovies: Movies = this.state.movies.map(movie => {
      if (movie.id === id) {
        if (movie.isLiked) {
          movie.isLiked = false
          movie.likes--
        }
        if (isDisliked) {
          movie.isDisliked = true
          movie.dislikes++
        } else {
          movie.isDisliked = false
          movie.dislikes--
        }
      }
      return movie
    })

    this.setState({
      movies: updatedMovies
    })
  }

  updateSelectedCategories (selectedOptions: { value: string, label: string }[]) {
    const options = selectedOptions.map(op => op.value)
    const pageCount = Math.ceil(this.filterMovies(options, this.state.movies).length / this.state.displayCount)
    this.setState((prevState) => {
      return {
        selectedCategories: options,
        currentPage: prevState.currentPage >= pageCount ? prevState.currentPage === 0 ? 0 : prevState.currentPage - 1 : prevState.currentPage
      }
    })
  }

  filterMovies (options: string[], movies: Movies) {
    return movies.filter(movie => {
      return options.includes(movie.category)
    })
  }

  deleteCard (id: string) {
    let movieCategory = ''
    const updatedMovies: Movies = this.state.movies.filter(movie => {
      if (movie.id !== id) {
        return movie
      }
      movieCategory = movie.category
    })

    let updatedCategories: string[] = []
    if (updatedMovies.filter(movie => movie.category === movieCategory).length === 0) {
      updatedCategories = this.state.selectedCategories.filter(cat => cat !== movieCategory)
    }

    const pageCount = Math.ceil(this.filterMovies(this.state.selectedCategories, updatedMovies).length / this.state.displayCount)

    this.setState(prevState => {
      return {
        movies: updatedMovies,
        selectedCategories: updatedCategories.length > 0 || this.filterMovies(prevState.selectedCategories, updatedMovies).length === 0 ? updatedCategories : prevState.selectedCategories,
        currentPage: prevState.currentPage >= pageCount ? prevState.currentPage === 0 ? 0 : prevState.currentPage - 1 : prevState.currentPage
      }
    })
  }

  render () {
    const movieCards = this.filterMovies(this.state.selectedCategories, this.state.movies).map(movie => {
      return (
        <MovieCard
          key={ movie.id }
          id={ movie.id }
          title={ movie.title }
          category={ movie.category }
          likes={ movie.likes }
          dislikes={ movie.dislikes }
          isLiked={ movie.isLiked }
          isDisliked={ movie.isDisliked }
          updateLike={ this.updateMovieLike }
          updateDislike={ this.updateMovieDislike }
          deleteCard={ this.deleteCard } />
      )
    })
    const categories = this.getCategories(this.state.movies).map(cat => {
      return { value: cat, label: cat }
    })
    const pageCount = Math.ceil(movieCards.length / this.state.displayCount)
    return (
      <div className='main-wraper'>
        <Settings displayCount={ this.state.displayCount }
          updateDisplayCount={ this.updateDisplayCount }
          categories={ categories }
          updateSelectedCategories={ this.updateSelectedCategories }
          selectedCategories={ this.state.selectedCategories } />
        <main className='main-content'>
          { movieCards.slice(this.state.currentPage * this.state.displayCount, this.state.displayCount + (this.state.currentPage * this.state.displayCount)) }
        </main>
        <PageSystem
          displayCount={ this.state.displayCount }
          itemsToDisplay={ movieCards.length }
          currentPage={ this.state.currentPage }
          updatePage={ this.updatePage } />
      </div>
    )
  }
}

export default MainContent
