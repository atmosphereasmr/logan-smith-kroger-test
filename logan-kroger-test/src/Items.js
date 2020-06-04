import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Table } from 'reactstrap';

class Items extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidUpdate(newProps) {
    if (newProps !== this.props) {
      if (this.props.category) {
        await axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.props.category}`).then(items => {
          this.setState({ items: items.data })
        })
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Items in Category: ({this.props.category})</h3>
        <Table striped>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
          {this.state.items.map(item => {
            return (
              <tr>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.description}
                </td>
              </tr>
            )
          })}
        </Table>
      </div>
    )
  }
}

export default Items;
