import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners'
import './style.css'

class Page extends Component {

state = {
  itemSelected: {},
  favorite : 'favorito_vacio',
  buttonFavorite: 'Agregar a favoritos'
}

genres(itemSelected){
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
                  <img className='blog-post__img-favorite' 
                    onClick={this.getItemFavorite.bind(this, itemSelected.item.id)}
                    src={ require(`../../../images/${this.state.favorite}.png`) } 
                    alt='favorite' />
                  <div className='blog-post__gen'>
                      <span>Genero:</span>
                      { this.genres(itemSelected) }
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
                    {this.state.buttonFavorite}
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

itemFavorite(itemSelected){
  if(localStorage.hasOwnProperty('itemsFavorites')){
    let store = localStorage.getItem('itemsFavorites');
    let array = JSON.parse(store);
      if(array.includes(itemSelected.item.id)){
          this.setState({
            favorite: 'favorito_seleccionado',
            buttonFavorite: 'Quitar de favoritos'
          })
      }
  }  
}

getItemFavorite(id, e){
  if(localStorage.hasOwnProperty('itemsFavorites')){
    let store = localStorage.getItem('itemsFavorites');
    let array = JSON.parse(store);
      if(array.includes(id)){
        let index = array.indexOf(id);
        if (index > -1) {
          array.splice(index, 1);
          localStorage.setItem('itemsFavorites', JSON.stringify(array));
        }
        this.setState({
          favorite: 'favorito_vacio' ,
          buttonFavorite: 'Agregar a favoritos'
        })
      }else{
        array.push(id);
        localStorage.setItem('itemsFavorites', JSON.stringify(array));
        this.setState({
          favorite: 'favorito_seleccionado' ,
          buttonFavorite: 'Quitar de favoritos'
        })
      }
  }else{
    let array = []
    array.push(id);
    localStorage.setItem('itemsFavorites', JSON.stringify(array));
    this.setState({
      favorite: 'favorito_seleccionado' ,
      buttonFavorite: 'Quitar de favoritos'
    })
  }

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
