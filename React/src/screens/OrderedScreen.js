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
          'Authorization': 'Bearer 1d29777820d178c381b4551855ac20351091956d56426ba2d858' //+ this.state.dataToken
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

  renderTableData() {
    return this.state.dataSource.map((item) => {
       return (
        <tr key = {item.fieldData.ItemID}>
          <td>{item.fieldData.ItemID}</td>
          <td>{item.fieldData.ItemName}</td>
          <td>{item.fieldData.ItemAmount}</td>
        </tr>
       )
    })
 }

 renderTableHeader() {
  let header = ['ItemID', 'ItemName', 'ItemAmount']
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}
 
  render() {
      if (this.state.isLoading === true) {
        return (
          <div>Loading...</div>
        )
      } else {
        return (
          <div id='table_holder'>
          <table id='ordered_items'>
            <tbody style={{'height': '1140px', 'overflow':'scroll', 'display': 'block'}}>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
            </tbody>
          </table>
          </div> 
        )}
    }
}