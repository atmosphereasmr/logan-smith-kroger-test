import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class Categories extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  async componentWillMount() {
    await axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category').then(categories => {
      this.setState({categories: categories.data})
      })
  }

  render() {
    return (
      <div>
        <h3>Menu Categories</h3>
        <ul>
        {this.state.categories.map(category => {
          let activeClass = null;

          if (category.short_name === this.props.category) {
            activeClass = 'active-category'
          }

          return (
            <li style={{cursor: "pointer"}} className={activeClass}>
              <div onClick={() => this.props.selectItem(category)}>
              {category.name} - ({category.short_name})
              </div>
            </li>
          )
        })}
      </ul>
      </div>
    )
  }
}

export default Categories;
