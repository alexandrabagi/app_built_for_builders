import React from 'react';

import InputField from '../components/InputField'
import Button from './../components/Button'
import Content from '../components/Content'
import Modal from '../components/Modal'

import Popup from "reactjs-popup";

import Clock from './../images/Clock.PNG'

export default class HourRegistrationScreen extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        selectedButton: null,
        buttonsRow1: [
          {id: 0, label: "Me", selected: false},
          {id: 1,label: "Coworker", selected: false, onClick : () => {}},
          {id: 2,label: "Both", selected: false}
        ],
        buttonsRow2: [
          {id: 3, label: "Today", selected: false},
          {id: 4, label: "Yesterday", selected: false},
          {id: 5, label: "Other", selected: false}
        ],
        showModal: false,
        coworker: 'Coworker'
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getCoworker = (coworkerName) => {
    console.log('Value from HourReg: ' + coworkerName)
    this.setState({ coworker: coworkerName })
  }

  openModal() {
    this.setState({
        showModal: true
    });
  }

  closeModal() {
    this.setState({
        showModal: false
    });
  }

  changeButtonState (id, index) {
    let buttonState = []
    if(id<=2) buttonState = this.state.buttonsRow1
    if(id>2) buttonState = this.state.buttonsRow2
    buttonState.map((button) => button.selected = false)
    buttonState[index].selected = !buttonState[index].selected
    this.setState(buttonState)
  }

  render() {
    const textStyle = {
      fontSize: '30px',
      color: 'rgba(8, 67, 135, 0.8)',
      padding: '20px'
    };

    return (
      
      <div className="content-area">
        <div>
          <div style={textStyle}>Who are you registering?</div>
          <div className='row'>

            <Button id = {this.state.buttonsRow1[0].id} label={this.state.buttonsRow1[0].label} selected={this.state.buttonsRow1[0].selected} onClick={()=> this.changeButtonState(this.state.buttonsRow1[0].id, 0)}/>

            <Button 
              id={this.state.buttonsRow1[1].id} 
              label={this.state.coworker} 
              selected={this.state.buttonsRow1[1].selected} 
              onClick={() => {
                this.openModal()
                this.changeButtonState(this.state.buttonsRow1[1].id, 1)
              }}/>
            <Modal 
              show={this.state.showModal}
              onClose={this.closeModal}
              animation={false} 
              selectedCoworkerM={this.getCoworker}/>

            <Button 
              id={this.state.buttonsRow1[2].id} 
              label={this.state.buttonsRow1[2].label} 
              selected={this.state.buttonsRow1[2].selected} 
              onClick={() => {
                this.openModal()
                this.changeButtonState(this.state.buttonsRow1[2].id, 2)
              }}/>
            <Modal 
              show={this.state.showModal}
              onClose={this.closeModal}
              animation={false} 
              selectedCoworkerM={this.getCoworker}/>
        </div>  
      </div>

      <div>
        <div style={textStyle}>Which day are you registering for?</div>
        <div className='row'>
          {this.state.buttonsRow2.map((button, index) => {
              return(
                <Button id = {button.id} label={button.label} selected={button.selected} onClick={()=> this.changeButtonState(button.id, index)}/>
              )
            })}
        </div>
      </div>

      <div>
      <InputField
        label="Tap here to describe what you worked on." />
      </div>
      
      
      <div style={textStyle}>How long did you work on this task?</div>
      <div className="img container">
        <img src={Clock} alt="clock"/>
          </div>
       <button 
        className="save"
        onClick={this.clickLog}>Save</button>

    </div>
  )};
};
