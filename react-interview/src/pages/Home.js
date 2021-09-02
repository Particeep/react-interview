import React, { useEffect, useState } from 'react';
import {movies$ } from "../components/Movies"
import { StyledGrid, StyledGridContent, StyledPage } from '../styles/StyledMovies';
import likes from "../assets/icons8-j'aime-ça-50.png"

function Home() {
    
    const [movies, setMovies] = useState({allMovies: []})

    useEffect(() => {
        movies$.then(data=>setMovies({allMovies: [data]}))
    },[])

    console.log(movies.allMovies.map(item => item.map(e =>e.title)))

    return (
        <StyledPage>
            <p className="titlePage">Listes de films</p>
            
                <div>
                
                    <StyledGrid>
                        <StyledGridContent>
                            {
                                movies.allMovies.map(item => item.map(e => (
                                        <div className="movieBlock">
                                            <h1>{e.title}</h1>
                                            <p>{e.category}</p>
                                            <div className="likesAndDislikesBlock">
                                                <div className="likesBlock">
                                                    <img src={likes} alt="likes"/>
                                                    <p>{e.likes}</p>
                                                </div>
                                                <div className="dislikesBlock">
                                                    <p>{e.dislikes}</p>
                                                </div> 
                                                
                                            </div>
                                        </div>
                                )))
                            }
                        </StyledGridContent>
                    </StyledGrid>
                     
                </div>
        </StyledPage>
    )
}

export default Home;