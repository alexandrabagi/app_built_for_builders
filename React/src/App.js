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
    currentMaterial: "-",
    materials: [
      //id,image and name fields are used in the ImageGridScreen which needs an array of this structure. 
      //image field is used for which image to show, and name is used in the header tag in the 
      //In this specific case, they are the same. 
      //In the ProductScreen they are not the same 
      {id:1, image: 'Screws', name: 'Screws'},
      {id:2, image: 'Pipes', name: 'Pipes'},
      {id:3, image: 'Bricks', name: 'Bricks'},
      {id:4, image: 'Insulations', name: 'Insulations'},
      {id:5, image: 'Constructions', name: 'Constructions'},
      {id:6, image: 'Roofing', name: 'Roofing'},
      {id:7, image: 'Tools', name: 'Tools'},
      {id:8, image: 'Rigips', name: 'Rigips'},
      {id:9, image: 'Plastering', name: 'Plastering'}
      
    ]
    
  }

  toggleImageSelect = (id) => {
    let materialsToLookUp = [...this.state.materials];
    let selectedMaterial= materialsToLookUp.find(material => material.id === id);
    // window.location = './products/'+ selectedMaterial.id +'/' + selectedMaterial.image ;
    window.location = './products/'+ selectedMaterial.id ;
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
                  selectedCategory={this.state.currentMaterial}
                />
              )
            }} />
             <Route path="/materials" render={() => {
              return (
                <MaterialGridScreen
                 //Parse the materials array to the component so that it knows which materials to show.
                  materials={this.state.materials}
                  toggleImageSelect={this.toggleImageSelect} 
                />
              )
            }} />
            <Route path="/list" component={OrderedScreen} />
            <Route path="/products/:materialId" render={(props) => {
              return (
                <ProductGridScreen
                  //forward the materialId from the path on to the ProductGridScreen component
                  materialId = {props.match.params.materialId} 
                  //also it needs the materials array, so it can find the one that was clicked
                  materials={this.state.materials}
                />
              )
            }} />

          </Switch>
          <TabbedBar />
        </Router>
      </div>
    );
  }
}

export default App;