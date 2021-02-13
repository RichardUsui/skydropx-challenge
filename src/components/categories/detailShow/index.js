import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { getItemSelected } from '../../../redux/actions/getItemSelected';

class Detail extends Component {

    state = {
      itemSelected:{}
    }
 
    async componentDidMount() {
        await this.props.getItemSelected(this.props.match.params.id);
    }

    render() {
        const { itemSelected } = this.props;
        return (
          <div>
            <Page
              itemSelected={itemSelected}
              goBack={this.props.history.goBack}
            />
          </div>
        );
    }
}

const mapStateToProps = state => ({
    itemSelected: state.itemSelected
});

const mapDispatchToProps = {
    getItemSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)