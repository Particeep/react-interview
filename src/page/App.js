import ComposantCarte from './cartes/carte'
import ComposantNavBar from './navBar/navBar'
import { movies$ } from './../utile/movies'
import { useState } from 'react';
import './../utile/styles/index.scss'


function App() {

  let [movies, setMouvis] = useState(); // se hook permer de stocket la liste asyncron de film 
  let [listeCategory, setlisteCategory] = useState(); // se hook me permet de gerer les category
  let [searchFilm, setSearchFilm] = useState(""); // se hook me permet de chercher un film via la bar de recherche
  let [nbFilm, setNbFilm] = useState(-1); // se hook me permet de gerer le nombre de film a afficher
  let [starteur, setStarteur] = useState(0); // se hook me permet de gerer le sisteme de fleche afin de commencer l'affichage au bon film

  async function takeMovies(){ // cette fonction est activer afin de remplir le hook stoquand les film
    let tmp;
    if (!movies)
      tmp = await movies$;
    if (tmp)
      setMouvis(tmp)
  }

  function createDivMouvie(){ // creer la liste des film a afficher 
    let res;
    let limitation = 0;
    let numberFilm = 0;
    if (movies){ // pour eviter tout probleme d'undefined 
      res = movies.map((element) => {
        numberFilm++;
        if ((nbFilm !== -1 && limitation >= nbFilm )|| numberFilm < starteur) // me permet de passer les film precedant ou futur
          return ;
        for (let i = 0; listeCategory && listeCategory[i]; i++) // cette boucle permet de retirer les film donc la category a etait retirer ou qui ne correspond pas a la recherche
        {
          if (listeCategory[i].category === element.category && listeCategory[i].actif === true){
            if (searchFilm === "" || element.category.indexOf(searchFilm) != -1 || element.title.indexOf(searchFilm) != -1){
              limitation++;
              return (
                <div key={element.id} className='listeCarteCarte'>
                  <ComposantCarte carte={element} setMouvis={setMouvis} listeFilm={movies}/>
                </div>
              )      
            }
          }
        }
      })
      return (res);
    }
  }
  takeMovies()
  return (
    <div>
      <ComposantNavBar listeCategory={listeCategory} setlisteCategory={setlisteCategory} movies={movies} searchFilm={searchFilm} setSearchFilm={setSearchFilm} nbFilm={nbFilm} setNbFilm={setNbFilm}/>
      <div className='zoneListeCarte'>
        <i onClick={() => {setStarteur(starteur > 0? starteur - 1 : starteur)}} className="fa-solid fa-angle-left zoneListeCarteFlecheLeft"></i>  
        <div className='listeCarte'>
          {createDivMouvie()}
        </div>
        <i onClick={() => {setStarteur(starteur < movies.length ? starteur + 1 : starteur)}} className="fa-solid fa-chevron-right zoneListeCarteFlecheRight"></i>
      </div>
    </div>
  );
}

export default App;
