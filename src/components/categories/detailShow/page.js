import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners'
import './style.css'

class Page extends Component {

state = {
  itemSelected: {},
  favorite : this.props.isFavorite
}

directorRender(itemSelected){
  if(itemSelected.item.created_by('name')){
    return (
      <span>
        <span>Director:</span>
        { itemSelected.item.created_by.name }
      </span>
    )
  }
}

generoRender(itemSelected){
  if(itemSelected.item.hasOwnProperty('genres')){
    return (
      <div>
        {itemSelected.item.genres.map(genero => (
          <h5 key={genero.id}>
            { genero.name }
          </h5>
        ))}
      </div>
    )
  }
}

durationRender(itemSelected){
  if(itemSelected.item.hasOwnProperty('episode_run_time')){
    return (
      <div>
        {itemSelected.item.episode_run_time.map((time, index)  => (
          <span className='span' key={index}>
            {index !== 0 ? ',' : ''} { time } 
          </span>
        ))}
        min.
      </div>
    )
  }
}

setStars(itemSelected){
  const lenght = itemSelected.item.vote_average
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
          <img src={require('../../../images/estrella_llena_grande.png')} alt='star' />
        </span>
      ))}
      {media.map( index => (
        <span key={index}>
          <img src={require('../../../images/estrella_media_grande.png')} alt='star' />
        </span>
      ))}
      {vacia.map(index => (
        <span key={index}>
          <img src={require('../../../images/estrella_vacia_grande.png')} alt='star' />
        </span>
      ))}
      &nbsp;&nbsp;
      <span className='span'>{ lenght }</span>
      </div>
  )
}

itemRender(itemSelected, goBack){
  if(itemSelected.item !== undefined){
    return (
          <div className='blog-post'>
              <div className='blog-post__img'>
                <img src={`https://image.tmdb.org/t/p/w500${itemSelected.item.poster_path}`} alt={itemSelected.item.name}/>
              </div>
              <div className='blog-post__info'>
                  <h1 className='blob-post__title'>
                    { itemSelected.item.name }
                  </h1>
                  <div className='blog-post__gen'>
                      <span>Calificacion:</span>
                      { this.setStars(itemSelected)} 
                  </div>
                  <img className='blog-post__img-favorite' 
                    onClick={this.getItemFavorite.bind(this, itemSelected.item.id)}
                    src={ require(`../../../images/${this.state.favorite ? 'favorito_seleccionado' :'favorito_vacio' }.png`) } 
                    alt='favorite' />
                  <div className='blog-post__gen'>
                      <span>Director:</span>&nbsp;&nbsp;
                      <span className='span'>{ itemSelected.item.hasOwnProperty('created_by') ?  itemSelected.item.created_by.length > 0 ? itemSelected.item.created_by[0].name : 'No disponible' : 'No disponible'}</span>
                      <br></br>
                      <span>Generos:</span>
                      { this.generoRender(itemSelected) }
                      <br></br>
                      <span>Duracion:</span>
                      { this.durationRender(itemSelected) }
                      <br></br>
                      <span>Episodios:</span>&nbsp;&nbsp;
                      <span className='span'>{ itemSelected.item.number_of_episodes }</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Temporadas:</span>&nbsp;&nbsp;
                      <span className='span'>{ itemSelected.item.number_of_seasons }</span>
                      <br></br>
                      <span>Fecha ultimo episodio:</span>&nbsp;&nbsp;
                      <span className='span'>{ itemSelected.item.hasOwnProperty('last_episode_to_air') ?  itemSelected.item.last_episode_to_air.hasOwnProperty('air_date') ? itemSelected.item.last_episode_to_air.air_date : '' : ''}</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Fecha proximo episodio:</span>&nbsp;&nbsp;
                      <span className='span'>{ itemSelected.item.hasOwnProperty('next_episode_to_air') ?  itemSelected.item.next_episode_to_air !== null ? itemSelected.item.next_episode_to_air.hasOwnProperty('air_date') ? itemSelected.item.next_episode_to_air.air_date : '' : 'Finalizado' : ''}</span>
                  </div>
                  <p className='blog-post__text'>
                    { itemSelected.item.overview }
                  </p>
                  <button 
                    onClick={goBack} 
                    className='blog-post__button-2'>
                    Regresar
                  </button>
                  <button
                    onClick={this.getItemFavorite.bind(this, itemSelected.item.id)}
                    className='blog-post__button-2'>
                    {this.state.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos' }
                  </button>
              </div>
          </div>
    )
  }else{
    return(
      <center><SyncLoader /></center>
    )
  }
}

getItemFavorite(id, e){
  var band = false
  if(localStorage.hasOwnProperty('itemsFavorites')){
    let store = localStorage.getItem('itemsFavorites');
    let array = JSON.parse(store);
      if(array.includes(id)){
        let index = array.indexOf(id);
        if (index > -1) {
          array.splice(index, 1);
          localStorage.setItem('itemsFavorites', JSON.stringify(array));
        }
      }else{
        array.push(id);
        localStorage.setItem('itemsFavorites', JSON.stringify(array));
        band = true
      }
  }else{
    let array = []
    array.push(id);
    localStorage.setItem('itemsFavorites', JSON.stringify(array));
    band = true
  }
  this.setState({
    favorite: band
  })
}

render(){

    const { itemSelected, goBack } = this.props

    return (
        <Fragment>
          <div className='container-detalle'>
              { this.itemRender(itemSelected, goBack) }              
          </div>
        </Fragment>
    );
}
}

const mapStateToProps = state => ({
  itemSelected: state.itemSelected
});

export default connect(mapStateToProps)(Page)
