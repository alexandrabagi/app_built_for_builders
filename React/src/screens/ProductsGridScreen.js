import React from 'react';
import { ImageGridScreen } from '../components/ImageGridScreen';

/* Contains specifc Material section e.g. all screws*/

class ProductGridScreen extends React.Component {

  constructor(props) {
    super(props);
    //extracting the id from the path and looking up wich material has that id. 
    this.materialId = this.props.materialId
    this.materialsToLookUp = [...this.props.materials];
    this.selectedMaterial = this.materialsToLookUp.find(material => material.id.toString() === this.materialId);
    //when a material is found, then use the image property for finding the correct json file in the folder structure.
    this.data = require('../images/' + this.selectedMaterial.image + '/data.json');
    this.state = {
      isSaving: false,
      dataToken: null,
      dataTokenDate: null,
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

  IncrementCount = (item) => {
    item.count = item.count + 1
    //makes the ui re-render it self, so count is updating
    this.setState({
    });
  }

  DecreaseCount = (item) => {
    if (item.count > 0)
      item.count = item.count - 1
    //makes the ui re-render it self, so count is updating
    this.setState({
    });
  }

  OrderProduct = (item) => {
    var validToken = false;
    if (this.state.dataToken != null && this.state.dataTokenDate != null) {//Check if token is less than 12 min old (server have 15 min span)
      //https://www.w3resource.com/javascript-exercises/javascript-date-exercise-44.php
      var currentTime = new Date()
      var diff = (currentTime.getTime() - this.state.dataTokenDate.getTime()) / 1000;
      diff /= 60;
      var totalMins = Math.abs(Math.round(diff));
      if (totalMins < 12) {
        validToken = true;
      }
    }

    //If token is still valid than go directly to Order() method, otherwise use LogInAndOrder() method to first login and than order
    if (validToken) {
      this.Order(item)
    }
    else {
      this.LogInAndOrder(item);
    }

    this.SetCountToZero(item)
  }

  SetCountToZero = (item) => {
    if (item.count > 0)
      item.count = 0
    //makes the ui re-render it self, so count is updating
    this.setState({
    });
  }

  //The method for both: logging in by getting the token and ordering 
  LogInAndOrder = (item) => {
    this.setState({
      itemToOrder: {
        fieldData: {
          ItemID: item.id,
          ItemName: item.name,
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
      // The response translated to json
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isSaving: true,
          dataToken: responseJson.response.token,
          dataTokenDate: new Date() //DB do not give us creation date-time, so we create it ourselves here
        })

      })
      .then(console.log("DataToken - Product: " + this.state.dataToken))
      // save data
      .then(() => {
        //turn itemToOrder from this.state into json string as jsonData
        var jsonData = JSON.stringify(this.state.itemToOrder)
        fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/layouts/@MatOrd/records', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.dataToken
          },
          body: jsonData
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson.response);
            this.setState({
              isSaving: false,
              //reset the item to order to null; 
              itemToOrder: null
            })
          })
      })
      .catch((error) => {
        console.log(error)
      });
  }
  
  //The method for: only ordering
  Order = (item) => {

    this.state.itemToOrder = {
      fieldData: {
        ItemID: item.id,
        ItemName: item.name,
        ItemAmount: item.count
      }
    }
    var jsonData = JSON.stringify(this.state.itemToOrder)
    return fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/layouts/@MatOrd/records', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.dataToken
      },
      body: jsonData
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.response);
        this.setState({
          isSaving: false,
          itemToOrder: null
        })
      })
      .catch((error) => {
        console.log(error)
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
          toggleImageSelect={this.toggleImageSelect}
          IncrementCountClick={this.IncrementCount}
          DecreaseCountClick={this.DecreaseCount}
          OrderProductClick={this.OrderProduct}
          showButtons={true}
        />
      </div>
    );
  }
};

export default ProductGridScreen;


