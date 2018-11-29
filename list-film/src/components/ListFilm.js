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
		//	this.getSelectdCategories()
				const { currentNumberPage,nbFilmPerPage,filmList } = this.state;
        const numberResultStart =
						(currentNumberPage - 1) * nbFilmPerPage;
        let numberResultEnd = currentNumberPage * nbFilmPerPage;
        if (numberResultEnd > this.filmFilter().length) {
            numberResultEnd = this.filmFilter().length;
        }
				const pageArray = this.filmFilter().slice(numberResultStart, numberResultEnd);
				console.log("mes films ",pageArray);
				if(pageArray.length ===0){
					this.setState({currentNumberPage:1})
				}
        this.setState({
            filmsPerPage: pageArray,
            numberResultStart: numberResultStart,
            numberResultEnd: numberResultEnd,

				},()=>this.getCategories());
		};
		getSelectdCategories =() =>{
			const {filmList,selectedCategories} = this.state;
			 const categories =[]
			let newSelectedCategories =[]
			const myCategories = filmList.map(film =>film.category).filter(category =>(!categories.includes(category)))
			 console.log("nouvelle categories",categories);
			 newSelectedCategories= selectedCategories.filter(category =>myCategories.includes(category.value))
			 this.setState({selectedCategories:newSelectedCategories})
		}
		getCategories =() =>{
			this.getSelectdCategories()
		  const {filmList} = this.state;
			const selectedCategories =[];
			const categoriesObject =[{}];
			filmList.map(film =>film.category).filter(category =>{
				if(!selectedCategories.includes(category)){
					selectedCategories.push(category)
					categoriesObject.push({value:category,label:category})
				}
			})
			this.setState({categoriesObject})
		}
		filmFilter = () =>{
		const {filmList,selectedCategories} = this.state;
		console.log("filmList",filmList);
		console.log("selectedCategories",selectedCategories);

		const options = selectedCategories.map(option => option.value)
			console.log("mes catégories", options);

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
							// value ={categoriesObject}
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