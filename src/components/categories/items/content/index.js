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
              <p> { item.vote_average } </p>
              <img className='img-favorite' src={require(`../../../../images/${itemFavorite(item.id)}.png`)} alt='favorite' />
              <Link className='blog-post__button' to={`/detalle/${item.id}`}>
                  Ver detalle
              </Link>
            </div>      
          ))}        
        </div>
      )
    }else{
      return(
        <center><SyncLoader /></center>
      )
    }  
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
