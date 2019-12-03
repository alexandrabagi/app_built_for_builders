import React from 'react';
import data from '../data/fetched'

export default class OrderedScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataToken: null,
      dataTokenDate: null,
      dataSource: null
    }
  }

  componentDidMount() {
    var validToken = false;
    console.log("Datatoken: " + this.state.dataToken)
    console.log("DataTokenDate: " + this.state.dataTokenDate)
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
    console.log("ValidToken: " + validToken)
    //If token is still valid than go directly to Order() method, otherwise use LogInAndOrder() method to first login and than order
    if (validToken) {
      //this.fetchData()
    }
    else {
      console.log("Entered else statement")
      this.login()
      this.fetchData()
    }
  }

  login = () => {
    // fetch access token from API
    console.log("Login called")
    fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46MzMyMnFqMnM='
      },
      body: {}
    })
      // The response translated to json
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Response" + responseJson)
        this.setState({
          isLoading: true,
          dataToken: responseJson.response.token,
          dataTokenDate: new Date() //DB do not give us creation date-time, so we create it ourselves here
        })
      })
      .then(
        console.log("Datatoken in login: " + this.state.dataToken)
      )
  }

  fetchData = async () => {
    console.log("Fetching data")
    console.log("DataToken in fetch: " + this.state.dataToken)
    try {
      const response = await fetch('https://cloud.protabase.com/fmi/data/vLatest/databases/ByggeBygge_DEV_DATA/layouts/@MatOrd/records', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer bf0e9d01a256d1ef1c66ddeb0827efce8a08287f3c3ce1432043' //+ this.state.dataToken
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
        <tr key={item.fieldData.ItemID}>
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
            <tbody style={{ 'height': '1140px', 'overflow': 'scroll', 'display': 'block' }}>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      )
    }
  }
}