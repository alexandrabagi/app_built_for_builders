import React from 'react';
import Popup from 'reactjs-popup'

import InputField from '../components/InputField'
import Button from '../components/Button'
import Content from '../components/Content'

// import '../HourRegistration.css'

import Clock from './../images/Clock.PNG'

export default class HourRegistrationScreen extends React.Component {  
  
  state = { showPopup : false };
  
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
            <Button className="buttonStyle" label="Me" />
            <Popup modal trigger={
              <button className="button-unselected">Coworker</button>}>              
                {close => <Content close={close} />}
            </Popup>
            <Button className="buttonStyle" label="Both" />
          </div>
        </div>

        <div>
          <div style={textStyle}>Which day are you registering for?</div>
          <div className='row'>
          <Button label="Today" />
          <Button label="Yesterday" />
          <Button label="Other" />
          </div>
      </div>

      <InputField 
        label="Tap here to describe what you worked on." />
      <div style={textStyle}>How long did you work on this task?</div>
      <div className="img container">
        <img src={Clock} alt="clock"/>
      </div>
    </div>
  )};
};


