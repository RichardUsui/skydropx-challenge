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
    this.props.getListBestRated();
  }

  handleSelect = (obj) => {
    this.setState({
        rated: obj
    })
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