import React, { Component } from 'react'

class Order extends Component {
    
  handleSelect = (e) => {
    let object = {}
    let val = e.target.value
    let order = {}
    order = this.props.items

    switch (val) {
      case '1':
           object = order.items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case '2':
           object = order.items.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case '3':
          object = order.items.sort(((a, b) => a.vote_average - b.vote_average));
        break;
      case '4':
          object = order.items.sort(((a, b) => b.vote_average - a.vote_average));
        break;
    
      default:
        break;
    }
    this.props.handleOrder(object)
  }

  render () {
    // const { handleOrder } = this.props
    return (
        <div className="divOrder">
            <h4>Ordenar resultados por</h4>
            <select className='selectOrder' onChange={this.handleSelect}>
            <option value="1">Titulo (A-Z)</option>
            <option value="2">Titulo (Z-A)</option>
            <option value="3">Valoración ascendente</option>
            <option value="4">Valoración descendente</option>
            </select>
        </div>
    )
  }
}

export default Order