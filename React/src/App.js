import React, { Component } from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import { Collections } from './data/Collections';

import { MaterialGridScreen } from './screens/MaterialGridScreen';
import { OrderedScreen } from './screens/OrderedScreen';
import HourRegistrationScreen from './screens/HourRegistration';
import ProductGridScreen from  './screens/ProductsGridScreen';

import { TabbedBar } from './components/TabbedBar';
import { AppBar } from './components/AppBar';

import './App.css';

class App extends Component {

  constructor() {
    super();
  }

  state = {
    title: 'ProtaBuild',
    currentCategory: 'oneColor',
    images: [
      {id: 'Constructions', selected: false, filters: []},
      {id: 'Pipes', selected: false, filters: []},
      {id: 'Roofing', selected: false, filters: []},
      {id: 'Screws', selected: false, filters: []},
      {id: 'Tools', selected: false, filters: []},
      {id: 'Insulation', selected: false, filters: []}
    ],
  }

  toggleImageSelect = (id) => {
    let imagesToUpdate = [...this.state.images];
    let imageToUpdate = imagesToUpdate.find(image => image.id === id);
    window.location = './products/'+ imageToUpdate.id;
  }

  /*setCategory = category => {
    if (Collections[category]) {
      const images = Collections[category].map(id => {
        return {id, selected: false, filters: []};
      });
      this.setState({images})
    }
  }*/

  applyFilterToSelectedImages = filter => {
    
    let imagesToUpdate = [...this.state.images];
    let selectedImages = imagesToUpdate.filter(image => image.selected);
    
    let imagesWithFilter = selectedImages.filter(image => { 
      return image.filters.find(filterOnImage => filterOnImage == filter) 
    });

    if (imagesWithFilter.length > 0) { 
      imagesWithFilter.forEach(imageWithFilter => {
        imageWithFilter.filters = imageWithFilter.filters.filter(filterOnImage => {
          return filterOnImage !== filter 
        });
      });
    } else {
      selectedImages.forEach(selectedImage => selectedImage.filters.push(filter));
    }

    this.setState({images: imagesToUpdate});
    
  }

  render() {
    return (
      <div className="app">
        <AppBar />
        <Router>
          <Switch>
            <Route exact path="/category" render={() => {
              return (
                <MaterialGridScreen
                  images={this.state.images}
                  toggleImageSelect={this.toggleImageSelect}
                  handleFilterButtonClicked={this.applyFilterToSelectedImages}
                />
              )
            }} />
            <Route path="/hours" render={() => { 
              return ( 
                <HourRegistrationScreen 
                  selectedCategory={this.state.currentCategory}
                  //onCategorySelect={this.setCategory}
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