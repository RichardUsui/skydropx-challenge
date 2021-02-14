import React, { Fragment } from 'react';
import { SyncLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

function itemsRender(items){
  if(items.items !== undefined){
      return (
        <div className='container'>
          {items.items.map(item => (
            <div className='card' key={item.id}>
              <img className='img-poster' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name}/>
              <h4> { item.name } </h4>
              <p> {setStars(item.vote_average)} { item.vote_average } </p>
              <img className='img-favorite' src={require(`../../../../images/${itemFavorite(item.id)}.png`)} alt='favorite' />
              <Link className='blog-post__button' to={`/detalle/${item.id}`}>
                  Ver detalle
              </Link>
            </div>      
          ))}        
        </div>
      )
    }else{
        return (<center className='posLoading'><SyncLoader /></center>)
    }  
}

function setStars(lenght){
  var llena = []
  var media = []
  var vacia = []
    if(lenght === 10){
      llena = [1,2,3,4,5]
    }
    
    if(lenght >= 8){
      llena = [1,2,3,4]
      if(lenght >= 9)
        media = [1]
      else
        vacia = [1]
    }
    if(lenght < 8 && lenght > 6){
      llena = [1,2,3]
      if(lenght >= 7){
        media = [1]
        vacia = [1]
      }
       else{
         vacia = [1,2]
       }
    }
    if(lenght <= 6 && lenght > 4){
      llena = [1,2]
      if(lenght >= 5){
        media = [1]
        vacia = [1,2]
      }
       else{
         vacia = [1,2,3]
       }
    }
    if(lenght <= 4 && lenght > 2){
      llena = [1]
      if(lenght >= 3){
        media = [1]
        vacia = [1,2,3]
      }
       else{
         vacia = [1,2,3,4]
       }
    }

  
  return(
      <div>
      {llena.map(index => (
        <span key={index}>
          <img src={require('../../../../images/estrella_llena.png')} alt='star' />
        </span>
      ))}
      {media.map( index => (
        <span key={index}>
          <img src={require('../../../../images/estrella_media.png')} alt='star' />
        </span>
      ))}
      {vacia.map(index => (
        <span key={index}>
          <img src={require('../../../../images/estrella_vacia.png')} alt='star' />
        </span>
      ))}
      </div>
  )
}

function itemFavorite (id){
  if(localStorage.hasOwnProperty('itemsFavorites')){
    let store = localStorage.getItem('itemsFavorites');
    let array = JSON.parse(store);
      if(array.includes(id)){
        return 'favorito_seleccionado'   
      }else{
        return 'favorito_vacio'
      }
  }else{
    return 'favorito_vacio'
  }  
}



function Content(props) {
    const { items } = props
  
    return (
        <Fragment>
            <div className='body'>
              { itemsRender(items) }
            </div>
        </Fragment>
    );
}

export default Content
