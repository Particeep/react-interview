
function ComposantNavBar(data) {

  function checkSame(tmp){ // cette fonction me permet de verifier qu'il faux recharger la listCategory car il y a eu un changement
    if (!data.listeCategory || data.listeCategory.length !== tmp.length)
      return (false);
    for (let i = 0; data.listeCategory[i]; i++)
    {
      if (data.listeCategory[i].category !== tmp[i].category ||
        data.listeCategory[i].actif !== tmp[i].actif)
          return (false);
    }
    return (true);
  }

  function creatCategory(){ //recupere la liste des category presente dans la liste de film
   let tmp = [];
   if (!data.movies)
    return;
   if (data.listeCategory) // il est necessaire d'init tmp a data.listCategory afin d'eviter le changement de la valeur 'actif' dans le cas de la supretion d une category
    tmp = data.listeCategory;
   for (let i = 0; data.movies[i]; i++){ // cette boucle permet d'ajouter toutes les category qu'il existe
    let check = true;
     for (let x = 0; tmp[x]; x++){
        if (tmp[x].category === data.movies[i].category)
        {
          check = false;
          break;
        }
     }
     if (check === true){
      tmp.push({category:data.movies[i].category, actif:true})
     }
   }
   let res = [];
   for (let i = 0; tmp[i]; i++){ //cette boucle me permet de suprimer une category qui aurais etait suprimer
     for (let x = 0; data.movies && data.movies[x]; x++){
       if (data.movies[x].category === tmp[i].category){
         res.push(tmp[i]);
          break;
       }
     }
    }
   if (checkSame(res) === false)
    data.setlisteCategory(res)
  }

  function handleListCategory(category){ // cette fonction me permet de changer la valeur 'actif' listeCategory afin d'affihcer uniquement les film dont la category est actif
    let tmp = data.listeCategory.map((element) => {
        if (element.category === category.category){
            return ({
              ...category,
              actif: !category.actif,
            })
        }
        else 
          return (element);
    })
    data.setlisteCategory(tmp);
  }

  function createDivCategory(){ //inisialise les div comptenant les bouton de category
    return (data.listeCategory.map((element) => {
      return (
      <div key={element.category} className={element.actif === true ? "btnCategory": "btnCategory btnCategoryactif"} onClick={() => {handleListCategory(element)}}>
        <h3>{element.category}</h3>
      </div>)
    }))
  }
  
    creatCategory()
    return (
      <div className="navBar">
        <h4 className="messageNavBar">Netflix and chill...<br/>ça arrive !</h4>
        <div className="navBarNbFilm">
          <div onClick={() => {data.setNbFilm(4)}} className={data.nbFilm === 4 ? "navBarNbFilmBtn navBarNbFilmBtnActif": "navBarNbFilmBtn"}>
            <h3>4</h3>
          </div>
          <div onClick={() => {data.setNbFilm(8)}} className={data.nbFilm === 8 ? "navBarNbFilmBtn navBarNbFilmBtnActif": "navBarNbFilmBtn"}>
            <h3>8</h3>
          </div>
          <div onClick={() => {data.setNbFilm(12)}} className={data.nbFilm === 12 ? "navBarNbFilmBtn navBarNbFilmBtnActif": "navBarNbFilmBtn"}>
            <h3>12</h3>
          </div>
          <div onClick={() => {data.setNbFilm(-1)}} className={data.nbFilm === -1 ? "navBarNbFilmBtn navBarNbFilmBtnActif": "navBarNbFilmBtn"}>
            <h3>Tout</h3>
          </div>
        </div>
        <form className="formNavBar">
          <input onChange={(e) => {data.setSearchFilm(e.target.value)}} type="text" className="inputTextFormNavBar" value={data.searchFilm} placeholder="Recherche par nom / catégorie, attention au maj !"></input>
          <i className="fa-solid fa-magnifying-glass searchFormNavBar"></i>
        </form>
        <div className="navBarBtnCategory">
          {data.listeCategory?createDivCategory():<></>}
        </div>
      </div>
    );
  }
  
  export default ComposantNavBar;