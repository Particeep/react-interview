import React, { Component } from 'react';
import FilmCard from './FilmCard';
import {movies$} from '../movies'
import   './listFilm.css'
import { ClipLoader } from 'react-spinners';
import Select from 'react-select';


const options = [
  { value: 4, label: 4 },
  { value: 8, label: 8 },
  { value: 12, label: 12 }
];

class ListFilm extends Component {
    state = {
				filmList : [],
				categoriesObject :[{}],
				selectedCategories :[],
        loading :false,
        currentNumberPage: 1,
        filmsPerPage: [],
        nbFilmPerPage :4,
        numberResultStart: 0,
				numberResultEnd: 0,
     }
    componentDidMount = () => {
        movies$.then(data => {this.setState({filmList :data,loading:true},()=>this.getMoviesPerPage())
        });

    }
    handelDelete =(film) =>{
        this.setState(previousState => {
            return {
						filmList:[...previousState.filmList.filter(e => e.id !== film.id)],
            };
        },()=>this.getMoviesPerPage());

    }
    handelLike = (film,isLiked) =>{
        if(isLiked){
            film.likes +=1;

        console.log(film);

            this.setState(previousState => {
                return {
                filmList:
                previousState.filmList.map(e => {
                    if(e.id === film.id)
                        return film
                    return e
                })
                };
            })
        }
        else{
            film.dislikes +=1;
            this.setState(previousState => {
                return {
                filmList:
                previousState.filmList.map(e => {
                    if(e.id === film.id)
                        return film
                    return e
                })
                };
            })
        }
    }
    getMoviesPerPage = () => {
				const { currentNumberPage,nbFilmPerPage,filmList } = this.state;
        const numberResultStart =
						(currentNumberPage - 1) * nbFilmPerPage;
        let numberResultEnd = currentNumberPage * nbFilmPerPage;
        if (numberResultEnd > this.filmFilter().length) {
            numberResultEnd = this.filmFilter().length;
        }
				const pageArray = this.filmFilter().slice(numberResultStart, numberResultEnd);

        this.setState({
            filmsPerPage: pageArray,
            numberResultStart: numberResultStart,
            numberResultEnd: numberResultEnd,

				},()=>this.getCategories());
		};

		getCategories =() =>{
			const {filmList} = this.state;
			const selectedCategories =[];
			const categoriesObject =[{}];
			filmList.map(film =>{
				if(!selectedCategories.includes(film.category)){
					selectedCategories.push(film.category)
					categoriesObject.push({value:film.category,label:film.category})
				}
			})
			this.setState({categoriesObject})
		}
		filmFilter = () =>{
		const {filmList,selectedCategories} = this.state;
		console.log("filmList",filmList);
		console.log("selectedCategories",selectedCategories);

		const options = selectedCategories.map(option => option.value)
			console.log(options);

	if(options.length!==0){
		return filmList.filter(film =>options.includes(film.category) )
	}

	return filmList

		}
    handlerButtonPrevious = () => {
        const { currentNumberPage } = this.state;
        if (currentNumberPage > 1) {
            this.setState(
            {
                currentNumberPage: currentNumberPage - 1,
                filmsPerPage: []
            },() =>this.getMoviesPerPage()
            );
        }
    };

		/**
     * Go to the next page
     */
    handlerButtonNext = () => {
        const { currentNumberPage,nbFilmPerPage} = this.state;
        if (this.filmFilter().length / nbFilmPerPage > currentNumberPage) {
            this.setState(
            {
                currentNumberPage: currentNumberPage + 1,
                filmsPerPage: []
            },() =>this.getMoviesPerPage()
            );
        }
		};
		handleChange = (selectedOption) => {
			this.setState({ nbFilmPerPage:selectedOption.value,currentNumberPage:1 },() =>this.getMoviesPerPage());
		}

		handleChangeCategory = (selectedOption) =>{
			console.log(selectedOption);

			this.setState({ selectedCategories:selectedOption},() =>this.getMoviesPerPage());
		}
    render() {
			const {
				loading,
				filmList,
				categoriesObject,
				selectedCategories,
				currentNumberPage,
				filmsPerPage,
				nbFilmPerPage,
			} = this.state;


				if(loading){
					if (filmList.length !== 0) {
        return (
					<div>
            <div className = "ListFilm">
								 {filmsPerPage.map(film =>
								 <div key={film.id} className ="FilmCard">
								 <FilmCard
								 key={film.id}
								 film = {film}
								 handelDelete ={this.handelDelete}
								 handelLike={this.handelLike} />
								 </div>)}
						</div>
						<button onClick={this.handlerButtonPrevious}>{"\u003C"}</button>
						{currentNumberPage}
						<button onClick={this.handlerButtonNext}>{"\u003E"}</button>
						<Select
							name ="nbFilmPerPage"
							value={nbFilmPerPage}
							onChange={this.handleChange}
							options={options}
						/>
							<Select

							value={selectedCategories}
							onChange={this.handleChangeCategory}
							options={categoriesObject}
							isMulti ={true}
						/>
					</div>
				 );
				}
				}else{
					return (
						<div className='sweet-loading'>
								<ClipLoader
								sizeUnit={"px"}
								size={150}
								color={'#123abc'}
								loading={loading}
								/>
						</div>
				)
				}
    }
}

export default ListFilm;