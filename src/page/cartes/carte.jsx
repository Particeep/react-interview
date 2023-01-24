 import { Line, Circle } from 'rc-progress';


function ComposantCarte(data) {

    if (data.carte === undefined)
        return ;
    function handleSupElement(){//Function associer au bouton de supretion d'un film
        let tmp = [];
        for (let i = 0; data.listeFilm[i]; i++){
            if (data.listeFilm[i].id != data.carte.id)
                tmp.push(data.listeFilm[i]);
        }
        data.setMouvis(tmp)
    }

    function handleLikeFilm(valueLike){//Function associer au bouton de like
        let tmp = data.listeFilm.map((element) => {
            if (data.carte.id === element.id && element.ifLike != valueLike)
            {
                let carteTmp = {...element}
                if (valueLike === 1)
                    carteTmp.likes = (parseInt(carteTmp.likes) + 1).toString()
                else if (valueLike === -1)
                    carteTmp.dislikes = (parseInt(carteTmp.dislikes) + 1).toString()
                    return ({
                    ...carteTmp,
                    ifLike: valueLike,
                })
            }
            else{
                return ({
                    ...element,
                    ifLike: 0,
                })
            }
        })
        data.setMouvis(tmp)
    }
    return (
      <div className="carte">
        <img className="imgFilm" src={'./imgFilm/' + data.carte.title + '.jpg'}></img>
        <div className="infoCarteTitreLike">
            <div>
                <h3 className="infoCarte infoCarteTitre">{data.carte.title}</h3>
                <h4 className="infoCarte infoCarteCategory">{data.carte.category}</h4>
            </div>
            <i onClick={() => {handleLikeFilm(1)}} className={data.carte.ifLike === 1? "fa-regular fa-heart CarteBtnLike CarteLikeActif" : "fa-regular fa-heart CarteBtnLike " }></i>
            <i onClick={() => {handleLikeFilm(-1)}} className={data.carte.ifLike === -1? "fa-solid fa-heart-crack CarteBtnDisLike CarteDislikeActif" : "fa-solid fa-heart-crack CarteBtnDisLike " }></i>
        </div>
        <div className="infoCarteSupJauge">
            <div className="infoCarteJauge">
                <Line percent={(parseInt(data.carte.likes,10) * 100)/(parseInt(data.carte.likes,10)+parseInt(data.carte.dislikes,10))} strokeWidth={4} strokeColor="green" />
                <Line percent={(parseInt(data.carte.dislikes,10) * 100)/(parseInt(data.carte.likes,10)+parseInt(data.carte.dislikes,10))} strokeWidth={4} strokeColor="red" />
            </div>
            <i onClick={() => {handleSupElement()}} className="fa-solid fa-trash-can btnSupCarte"></i>
        </div>
      </div>
    );
  }
  
  export default ComposantCarte;