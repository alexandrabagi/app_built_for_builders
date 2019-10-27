import React, { Component } from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Collections } from './data/Collections';

import { GridScreen } from './screens/GridScreen';
import { AboutScreen } from './screens/AboutScreen';
import CategoryScreen from './screens/HourRegistration';

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
      {id: '_C5zsV_p-YI', selected: false, filters: []},
      {id: '58WRkqcAn9o', selected: false, filters: []},
      {id: '9z-veIxii6k', selected: false, filters: []},
      {id: 'AwnggmGaFms', selected: false, filters: []},
      {id: '9jsV5uKbAEM', selected: false, filters: []},
      {id: '3cNc1U7nJcs', selected: false, filters: []}
    ],
  }

  toggleImageSelect = (id) => {
    this.setState({subtitle: 'image selected: ' + id});
    let imagesToUpdate = [...this.state.images];
    let imageToUpdate = imagesToUpdate.find(image => image.id === id);
    imageToUpdate.selected = !imageToUpdate.selected;
    this.setState({images: imagesToUpdate});
  }

  setCategory = category => {
    if (Collections[category]) {
      const images = Collections[category].map(id => {
        return {id, selected: false, filters: []};
      });
      this.setState({images})
    }
  }

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
            <Route exact path="/" render={() => {
              return (
                <GridScreen
                  images={this.state.images}
                  toggleImageSelect={this.toggleImageSelect}
                  handleFilterButtonClicked={this.applyFilterToSelectedImages}
                />
              )
            }} />
            <Route path="/category" render={() => { 
              return ( 
                <CategoryScreen 
                  selectedCategory={this.state.currentCategory}
                  onCategorySelect={this.setCategory}
                />
              )
            }} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
          <TabbedBar />
        </Router>
      </div>
    );
  }
}

export default App;
