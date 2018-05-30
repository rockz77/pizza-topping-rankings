import React, { Component } from "react";
import styled from 'styled-components';
import Context from '../context/Context';
import "../../css/pizzaToppings.css";

// Components
import TopPizzaToppings from '../components/TopPizzaToppings';

// Styled components
import TopPizzaComponent from '../partials/TopPizzaComponent';

class TopPizzaToppingsCombo extends Component {

  // Includes Context.Provider
  render() {
    return (
      <div>
        <TopPizzaComponent>
          <h1>Top 20 Pizza Topping Combinations</h1>
          <TopPizzaToppings />
        </TopPizzaComponent>
      </div>
    );
  }
}

export default TopPizzaToppingsCombo;
