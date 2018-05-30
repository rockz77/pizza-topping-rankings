import React, { Component } from "react";
import styled from 'styled-components';
import Context from '../context/Context';
import PizzaToppingsProvider from '../providers/PizzaToppingsProvider';

// Styled components
import LoadingWrapper from '../partials/LoadingWrapper';

class TopPizzaToppings extends Component {
  constructor(){
      super();
      this.state = {
        pizzaToppingsCount: []
      }
  }

  getPizzaToppings() {

    return (
      <PizzaToppingsProvider>
        <Context.Consumer>
          { context => {
              context.pizzaToppingsDetails.map(pizzaTopping => {
                this.state.pizzaToppingsCount.push(pizzaTopping.toppings);
                console.log('Processing data...');
                console.log(this.state.pizzaToppingsCount);
              })

              let finalPizzaToppingsArr = this.state.pizzaToppingsCount
              .map((name) => {
                return {count: 1, name: name}
              })
              .reduce((a,b) => {
                a[b.name] = (a[b.name] || 0) + b.count
                return a
              }, {});

              let finalArr = [];
              let finalPizzaToppingNamesArr = Object.keys(finalPizzaToppingsArr).sort((a,b) => finalPizzaToppingsArr[b]-finalPizzaToppingsArr[a])
              let finalPizzaToppingCountsArr = Object.values(finalPizzaToppingsArr).sort((a,b) => {return b-a})
              for (let i=0; i<20; i++) {
                finalArr.push(
                  {
                    pizzaComboName: finalPizzaToppingNamesArr[i],
                    pizzaComboCount: finalPizzaToppingCountsArr[i],
                    pizzaComboRank: i + 1,
                  }
                );
              }

              setTimeout(function(){
                document.getElementById('loading-wrapper').style.display = 'none';
                document.querySelectorAll('.combo-list').forEach(item => {
                  item.style.display = 'block';
                });
              }, 4000);

              return (finalArr.map(combo => {
                return (
                  <div className="combo-list" key={ combo.pizzaComboRank }>
                    <ul>
                      <li>Rank: { combo.pizzaComboRank }</li>
                      <li>Combo Name: "{ combo.pizzaComboName }"</li>
                      <li>Combo Count: { combo.pizzaComboCount }</li>
                    </ul>
                  </div>
                )
              }))
            }
          }
        </Context.Consumer>
      </PizzaToppingsProvider>
    )

  }

  render() {
    return (
      <div className='main-wrapper'>
        <LoadingWrapper id='loading-wrapper'>Please wait. Data is loading...</LoadingWrapper>
        { this.getPizzaToppings() }
      </div>
    );
  }
}

export default TopPizzaToppings;
