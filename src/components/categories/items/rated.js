import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getListBestRated } from '../../../redux/actions/getListBestRated'
import Content from './content';
import Order from './orderResults';


class Items extends Component {

  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentDidMount() {
    this.props.getListBestRated(this.props.match.params.page <= 500 && this.props.match.params.page > 0 ? this.props.match.params.page : 1 );
  }

  handleSelect = (obj) => {
    this.setState({
        rated: obj
    })
  }

  nextPage = () => {
    const newPage = parseInt(this.props.match.params.page)+1
    const url = '/mejor-valorados/page/'+newPage.toString()
    window.location.href = url;
  }

  previewPage = () => {
    const newPage = parseInt(this.props.match.params.page) == 1 ? parseInt(this.props.match.params.page) : parseInt(this.props.match.params.page)-1
    const url = '/mejor-valorados/page/'+newPage.toString()
    window.location.href = url;
  }

  render(){ 
      const { rated } = this.props;
        return(
          <div>
            <h1><center>Lista de los shows mejor valorados</center></h1>
            <Order 
                items={rated}
                handleOrder={this.handleSelect}
            />
            <Content
                items={rated}
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
  rated: state.rated
});

const mapDispatchToProps = {
  getListBestRated
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)