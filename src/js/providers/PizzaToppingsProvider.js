import React, { Component, createContext } from 'react';
import Context from '../context/Context';

class PizzaToppingsProvider extends Component {
  constructor() {
    super();
    this.state = {
      pizzaToppingsInfo: []
    }
  }

  getData() {
    fetch('../../../data/pizzas.json')
    .then(response => response.json())
    .then(json => this.setState({ pizzaToppingsInfo: json }));
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Context.Provider value={{ pizzaToppingsDetails: this.state.pizzaToppingsInfo }}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default PizzaToppingsProvider;
