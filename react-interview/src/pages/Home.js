import React, { useEffect, useState } from 'react';
import {movies$ } from "../components/Movies"
import { StyledGrid, StyledGridContent, StyledPage } from '../styles/StyledMovies';
import likes from "../assets/icons8-j'aime-ça-50.png"
import { Button, ToggleButton, ToggleButtonGroup } from "ui-neumorphism"
import Icon from '@mdi/react'
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline
  } from '@mdi/js'
import  Nav  from '../components/Nav';

function Home() {
    
    const [movies, setMovies] = useState({ allMovies: [] })
    const [initialMovies, setInitialMovies] = useState({allInitialMovies: []})

    useEffect(() => {
        movies$.then(data => setMovies({ allMovies: [data] }))
        movies$.then(data=>setInitialMovies({allMovies: [data]}))
    },[])

    console.log(movies)

    return (
        <>
            <Nav category={initialMovies.allMovies} setMovies={ setMovies}/>
            <StyledPage>
                    <div className="alignGrid">
                    
                        <StyledGrid>
                            <StyledGridContent>
                                {
                                movies.allMovies.map(item => item.map(e => (
                                    e.map ? (e.map(element =>
                                        <div className="movieBlock"> 
                                            <h1>{element.title}</h1>
                                            <p>{element.category }</p>
                                            <div className="likesAndDislikesBlock">               
                                                <div className="likesBlock">
                                                    <Icon path={mdiThumbUpOutline} size={0.9} />
                                                    <p className="numberLikesAndDislikes">{element.likes}</p>
                                                </div>
                                                <div className="dislikesBlock">
                                                    <Icon path={mdiThumbDownOutline} size={0.9}  />
                                                    <p className="numberLikesAndDislikes">{element.dislikes}</p>
                                                </div>  
                                            </div>
                                            <div className="footerBlock">
                                                <label className="label">
                                                    <div className="toggle">
                                                        <input className="toggle-state" type="checkbox" name="check" value="check" />
                                                        <div className="indicator"></div>
                                                    </div>
                                                    <div className="label-text">like/dislike</div>
                                                </label>
                                                <Button className="deleteButton">Supprimer</Button>
                                            </div>
                                        </div>
                                        ))

                                        :
                                        <div className="movieBlock">
                                            <h1>{e.title}</h1>
                                            <p>{e.category}</p>
                                            <div className="likesAndDislikesBlock">               
                                                <div className="likesBlock">
                                                    <Icon path={mdiThumbUpOutline} size={0.9} />
                                                    <p className="numberLikesAndDislikes">{e.likes}</p>
                                                </div>
                                                <div className="dislikesBlock">
                                                    <Icon path={mdiThumbDownOutline} size={0.9}  />
                                                    <p className="numberLikesAndDislikes">{ e.dislikes}</p>
                                                </div>  
                                            </div>
                                            <div className="footerBlock">
                                                <label className="label">
                                                    <div className="toggle">
                                                        <input className="toggle-state" type="checkbox" name="check" value="check" />
                                                        <div className="indicator"></div>
                                                    </div>
                                                    <div className="label-text">like/dislike</div>
                                                </label>
                                                <Button className="deleteButton">Supprimer</Button>
                                            </div>
                                        </div>
                                    )))
                            }
                            
                            </StyledGridContent>
                        </StyledGrid>
                    </div>
                </StyledPage>
        </>    
    )
}

export default Home;