import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { getItemSelected } from '../../../redux/actions/getItemSelected';
import { SyncLoader } from 'react-spinners'

class Detail extends Component {

    state = {
      itemSelected:{}
    }

    async componentDidMount() {
        await this.props.getItemSelected(this.props.match.params.id);
    }

    itemFavorite(){
        let id = this.props.itemSelected.item.id
        if(localStorage.hasOwnProperty('itemsFavorites')){
          let store = localStorage.getItem('itemsFavorites');
          let array = JSON.parse(store);
            if(array.includes(id)){
              return true
            }
            return false  
        }
        return false  
    }

    render() {
      if(this.props.itemSelected.item !== undefined){
        const { itemSelected } = this.props;
        const itemFavorite = this.itemFavorite()
        console.log(this.props.itemSelected);
        return (
          <div>
            <Page
              isFavorite={itemFavorite}
              itemSelected={this.props.itemSelected}
              goBack={this.props.history.goBack}
            />
          </div>
        );
        
      }else{
        return (<center className='posLoading'><SyncLoader /></center>)
      }
    }
}

const mapStateToProps = state => ({
    itemSelected: state.itemSelected
});

const mapDispatchToProps = {
    getItemSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)