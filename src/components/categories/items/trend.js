import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getListTrend } from '../../../redux/actions/getListTrend'
import Content from './content';
import Order from './orderResults';


class Items extends Component {

  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentDidMount() {
    this.props.getListTrend(this.props.match.params.page <= 500 && this.props.match.params.page > 0 ? this.props.match.params.page : 100 );
  }

  handleSelect = (obj) => {
    this.setState({
        trend: obj
    })
  }

  nextPage = () => {
    const newPage = parseInt(this.props.match.params.page)+1
    const url = '/tendencia/page/'+newPage.toString()
    window.location.href = url;
  }

  previewPage = () => {
    const newPage = parseInt(this.props.match.params.page) == 1 ? parseInt(this.props.match.params.page) : parseInt(this.props.match.params.page)-1
    const url = '/tendencia/page/'+newPage.toString()
    window.location.href = url;
  }

  render(){ 
      const { trend } = this.props;
        return(
          <div>
            <h1><center>Lista de los shows tendencia</center></h1>
            <Order 
                items={trend}
                handleOrder={this.handleSelect}
            />
            <Content
                items={trend}
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
  trend: state.trend
});

const mapDispatchToProps = {
  getListTrend
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)