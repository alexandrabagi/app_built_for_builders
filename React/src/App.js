import React, { Component } from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { MaterialGridScreen } from './screens/MaterialGridScreen';
import { OrderedScreen } from './screens/OrderedScreen';
import HourRegistrationScreen from './screens/HourRegistration';
import ProductGridScreen from  './screens/ProductsGridScreen';

import { TabbedBar } from './components/TabbedBar';
import { AppBar } from './components/AppBar';

import './App.css';

class App extends Component {
 
    state = {
    title: 'ProtaBuild',
    currentCategory: 'oneColor',
    images: [
      {id: 'Screws', name: 'Screws'},
      {id: 'Pipes', name: 'Pipes'},
      {id: 'Bricks', name: 'Bricks'},
      {id: 'Insulations', name: 'Insulations'},
      {id: 'Constructions', name: 'Constructions'},
      {id: 'Roofing', name: 'Roofing'},
      {id: 'Tools', name: 'Tools'},
      {id: 'Rigips', name: 'Rigips'},
      {id: 'Plastering', name: 'Plastering'}
      
    ]
  }

  toggleImageSelect = (id) => {
    let imagesToUpdate = [...this.state.images];
    let imageToUpdate = imagesToUpdate.find(image => image.id === id);
    window.location = './products/'+ imageToUpdate.id;
  }

  render() {
    return (
      <div className="app">
        <AppBar />
        <Router>
          <Switch>        
            <Route path="/hours" render={() => { 
              return ( 
                <HourRegistrationScreen 
                  selectedCategory={this.state.currentCategory}
                />
              )
            }} />
             <Route path="/category" render={() => {
              return (
                <MaterialGridScreen
                  images={this.state.images}
                  toggleImageSelect={this.toggleImageSelect} 
                />
              )
            }} />
            <Route path="/list" component={OrderedScreen} />
            <Route path="/products/:categoryId/" component={ProductGridScreen} />
          </Switch>
          <TabbedBar />
        </Router>
      </div>
    );
  }
}

export default App;