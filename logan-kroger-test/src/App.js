import React, {Component} from 'react';
import Categories from './Categories';
import Items from './Items';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentCategory: null
    }
  }

  selectItem(item) {
    let categoryName = item.short_name;
    this.setState({currentCategory: categoryName})
  }

  render() {
    return (
      <div className='menu-container'>
      <div className='menu-category-column'>
      <Categories category={this.state.currentCategory} selectItem={e => this.selectItem(e)}  />
      </div>
      <div className='menu-item-column'>
      <Items category={this.state.currentCategory}  />
      </div>
      </div>
    )
  }
}