import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';

/* Contains specifc Material section e.g. all screws*/

class ProductGridScreen extends React.Component {

  constructor(props) {
    super(props);
    //extracting the id from the path and looking up wich material has that id. 
    this.materialId = this.props.materialId
    this.materialsToLookUp = [...this.props.materials];
    this.selectedMaterial= this.materialsToLookUp.find(material => material.id.toString() === this.materialId);
    //when a material is found, then use the image property for finding the correct json file in the folder structure.
    this.data = require('../images/'+this.selectedMaterial.image + '/data.json');
    this.state = {
      isLoading: true,
      dataToken: null,
      itemToOrder: null
    }
  }
   


    
    toggleImageSelect = (id) => {

      //for now we let the toogleimage method do the same as if you click add
      let productsToLookUp = [...this.data.products];
      let selectedItem = productsToLookUp.find(item => item.id === id);
      selectedItem.count = selectedItem.count + 1 
      //makes the ui re-render it self
     
    }
    OrderProduct = (item) => {
      this.setState({
        itemToOrder : {
              fieldData:{
                ItemID :item.id,
                ItemName:item.name,
                ItemAmount: item.count
              }
          }
      });
      return fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/sessions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MzMyMnFqMnM='
        }
    })
       .then ((response) =>{
        if (!response.ok) {
          console.log(response.statusText);
        }
        return response;
      })
      .then ((response) =>response.json())
      .then ((responseJson) => {
       this.setState({
          isSaving: true,
          dataToken: responseJson.response.token,
        })

      })

      // save data
      .then (() =>{
        var jsonData =  JSON.stringify(this.state.itemToOrder)
        fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/layouts/@MatOrd/records', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.dataToken
        },
        body: jsonData 
    })
  .then ( (response) => response.json() )
      .then ( (responseJson) => {
        console.log(responseJson.response);
        this.setState({
          isSaving: false,
          itemToOrder: null //reset the item to order to null; 
        })
      })


      })

    .catch((error) => {
      console.log(error)
    });
  }

    IncrementCount = (item) => {
        item.count = item.count + 1 
        //makes the ui re-render it self
     it  var currentDataToken = this.state.dataToken;
      this.setState({
        dataToken : currentDataToken,
        isLoading: false,
        itemToOrder: null
      });
    }

    DecreaseCount =  (item) => {
      if(item.count > 0)
        item.count = item.count - 1 
      //makes the ui re-render it self
      var currentDataToken = this.state.dataToken;
      this.setState({
        dataToken : currentDataToken,
        isLoading: false,
        itemToOrder: null
      });

    }

    render() {
        return (
       <div>
         <div>
            <h2>{this.selectedMaterial.name}</h2>
         </div>
         <ImageGridScreen 
                  items={this.data.products}
                  toggleImageSelect = {this.toggleImageSelect}
                  IncrementCountClick = {this.IncrementCount}
                  DecreaseCountClick = {this.DecreaseCount}
                  OrderProductClick = {this.OrderProduct}
                  showButtons = {true}
                />
         
        </div>
      );
    }
};

export default ProductGridScreen;


