import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header'
import WebcamCapture from '../components/Webcam/Webcam'
import Groceries from '../components/Groceries/Groceries'


class App extends Component {
  state = {
    groceriesArray: []
  }

  deleteGroceryHandler = (groceryIndex) => {
    const groceries = [...this.state.groceriesArray];
    groceries.splice(groceryIndex, 1);
    this.setState({groceries: groceries});
  }
  
  updateGroceryStateHandler = (dataFromChild) => {
    const groceries = [...this.state.groceriesArray];
    const totalGroceries = groceries.concat(dataFromChild);
    
    let priceHolder = {};
    totalGroceries.forEach(function (d) {
        if (priceHolder.hasOwnProperty(d.name)) {
          priceHolder[d.name] = priceHolder[d.name] + d.price
        } else {       
          priceHolder[d.name] = d.price
        }
    });
    
    let quantityHolder = {};
    totalGroceries.forEach(function (d) {
      if (quantityHolder.hasOwnProperty(d.name)) {
        quantityHolder[d.name] = quantityHolder[d.name] + d.quantity
      } else {       
        quantityHolder[d.name] = d.quantity
      }
    });

    let finalGroceries = [];
    
    for(let prop in quantityHolder) {
      finalGroceries.push({name: prop, price: (Math.floor(priceHolder[prop] * 100) / 100 ), quantity: quantityHolder[prop]});   
    }

    this.setState({groceriesArray: finalGroceries});
  }

  render() {

    return (
      
        <div className='App bx--grid' >
          <Header/>
          <div className='bx--row'>
            <div className='bx--col-xs-6'>
              <WebcamCapture 
              callbackFromParent={this.updateGroceryStateHandler}/>
            </div>
            <div className='bx--col-xs-6'>
              <Groceries
                groceries={this.state.groceriesArray} 
                click={this.deleteGroceryHandler}/>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
