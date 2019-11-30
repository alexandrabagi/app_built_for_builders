import React from 'react';
import data from '../data/fetched'

export default class OrderedScreen extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataToken: '',
      dataTokenObject: null,
      dataSource: null
    }
  }
  
  componentDidMount() {
    console.log("Entered componentDidMount")
    this.fetchData()
    /* // fetch access token from API
    console.log("DataToken before if: " + this.state.dataToken)
    console.log("DataToken object before if: " + this.state.dataTokenObject)
    if (this.state.dataTokenObject === null) {
      return fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46MzMyMnFqMnM='
      },
      body: {}
    })
    .then ( (response) => response.json() )
    .then ( (responseJson) => {

      this.setState({
        isLoading: true,
        dataToken: responseJson.response.token,
        dataTokenObject: responseJson.response
      })

    })
  } else {
  } */
    
    // fetch data
    //.then (() =>{ 
  }

  fetchData = async () => {
    console.log("Fetching data")
    try {
      const response = await fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/layouts/@MatOrd/records', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 5e3a10da6440fd4ba3f415960ddc4ecacb7d2b6f063b3f89c150' //+ this.state.dataToken
        }
      });
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.response.data,
      });
      console.log(this.state.dataSource);
      console.log(this.state.dataSource[0]);
    }
    catch (error) {
      console.log(error);
    }
  }
  
  
 
  render() {
    //const data = this.state.dataSource
    /* if (this.state.isLoading) {
      return (
        <div>Loading...</div>
      )
    } else { */
      //console.log(data.response.data)
      console.log(this.state.dataSource)
      console.log(this.state.isLoading)
      if (this.state.isLoading === true) {
        return (
          <div>Loading...</div>
        )
      } else {
        return (
          <div>
            <div>Item ID, Item name, Amount</div>
            <div> {
              this.state.dataSource.map((item) => {
              return (
                <h3>
                  {item.fieldData.ItemID}
                  {item.fieldData.ItemName}
                  {item.fieldData.ItemAmount}
                </h3>
              )
            })
            } </div>
          </div>
        )}
    }
}