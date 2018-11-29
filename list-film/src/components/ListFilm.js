import React, { Component } from 'react';
import FilmCard from './FilmCard';
import {movies$} from '../movies'
import   './listFilm.css'


class ListFilm extends Component {
    state = {
        filmList : [],
        loaded :false
     }
    componentDidMount = () => {
        movies$.then(data => {this.setState({filmList :data,loaded:true})
        });

    }
    handelDelete =(film) =>{


        this.setState(previousState => {
            return {
            filmList:
            [...previousState.filmList.filter(e => e.id !== film.id)]
            };
        });

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

    render() {

        const { filmList,loaded } = this.state;
        return (
            <div className = "ListFilm">
                 {loaded&&filmList.map(film =><div key={film.id} className ="FilmCard"><FilmCard key={film.id} film = {film} handelDelete ={this.handelDelete} handelLike={this.handelLike} /></div>)}
            </div>


         );
    }
}

export default ListFilm;