import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getListPopular } from '../../../redux/actions/getListPopular'
import Content from './content';
import Order from './orderResults';


class Items extends Component {

  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentDidMount() {
    this.props.getListPopular();
  }

  handleSelect = (obj) => {
    this.setState({
        popular: obj
    })
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