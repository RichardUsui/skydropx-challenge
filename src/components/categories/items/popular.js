import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getListPopular } from '../../../redux/actions/getListPopular'
import Content from './content'
import Order from './orderResults'

class Items extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
  }

  componentDidMount() {
    this.props.getListPopular(this.props.match.params.page <= 500 && this.props.match.params.page > 0 ? this.props.match.params.page : 1);
  }

  handleSelect = (obj) => {
    this.setState({ popular: obj })
  }

  nextPage = () => {
    const newPage = parseInt(this.props.match.params.page)+1
    const url = '/popular/page/'+newPage.toString()
    window.location.href = url;
  }

  previewPage = () => {
    const newPage = parseInt(this.props.match.params.page) == 1 ? parseInt(this.props.match.params.page) : parseInt(this.props.match.params.page)-1
    const url = '/popular/page/'+newPage.toString()
    window.location.href = url;
  }

  render(){ 
      const { popular } = this.props;
      
        return(
          <div>
            <h1><center>Lista de los shows mas populares</center></h1>
            <Order 
                items={popular}
                handleOrder={this.handleSelect}
            />
            <Content
                items={popular}
            />
            <div className='div-pagination'>
                <button
                  onClick={this.previewPage}
                  className='blog-post__button-2'>
                   Anterior
                </button>
                <button
                  onClick={this.nextPage}
                  className='blog-post__button-2'>
                  Siguiente
                </button>
            </div>
          </div>
        )
  }
}

const mapStateToProps = state => ({
  popular: state.popular
});

const mapDispatchToProps = {
  getListPopular
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)