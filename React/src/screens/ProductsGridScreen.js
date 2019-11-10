import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';


class ProductGridScreen extends React.Component {

  constructor(props) {
    super(props);
    //extracting the id from the path and looking up wich material has that id. 
    this.materialId = this.props.materialId
    this.materialsToLookUp = [...this.props.materials];
    this.selectedMaterial= this.materialsToLookUp.find(material => material.id.toString() === this.materialId);
    //when a material is found, then use the image property for finding the correct json file in the folder structure.
    this.data = require('../images/'+this.selectedMaterial.image + '/data.json');
  }
   


    
    toggleImageSelect = (id) => {

      //for now we let the toogleimage method do the same as if you click add
      let productsToLookUp = [...this.data.products];
      let selectedItem = productsToLookUp.find(item => item.id === id);
      selectedItem.count = selectedItem.count + 1 
      //makes the ui re-render it self
      this.setState({
      });
    }
 
    IncrementCount = (item) => {
        item.count = item.count + 1 
        //makes the ui re-render it self
        this.setState({
        });
    }

    DecreaseCount =  (item) => {
      if(item.count > 0)
        item.count = item.count - 1 
      //makes the ui re-render it self
      this.setState({
      });
    }
    render() {
        return (
       <div className="app">
         <div>
            <h2>{this.selectedMaterial.name}</h2>
         </div>
         <ImageGridScreen
                  items={this.data.products}
                  toggleImageSelect = {this.toggleImageSelect}
                  IncrementCountClick = {this.IncrementCount}
                  DecreaseCountClick = {this.DecreaseCount}
                  showButtons = {true}
                />
         
        </div>
      );
    }
};

export default ProductGridScreen;


