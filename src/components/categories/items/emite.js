import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getListEmite } from '../../../redux/actions/getListEmite'
import Content from './content';
import Order from './orderResults';


class Items extends Component {

  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentDidMount() {
    this.props.getListEmite();
  }

  handleSelect = (obj) => {
    this.setState({
        emite: obj
    })
  }

  render(){ 
      const { emite } = this.props;
        return(
          <div>
            <h1><center>Lista de los shows que mas se estan viendo</center></h1>
            <Order 
                items={emite}
                handleOrder={this.handleSelect}
            />
            <Content
                items={emite}
            />
          </div>
        )
  }
}

const mapStateToProps = state => ({
  emite: state.emite
});

const mapDispatchToProps = {
  getListEmite
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)