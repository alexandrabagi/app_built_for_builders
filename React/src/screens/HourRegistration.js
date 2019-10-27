import React from 'react';
import InputField from '../components/InputField'
import Button from './../components/Button'

import Clock from './../images/clock.PNG'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';


// export const CategoryScreen = props => {
export default class CategoryScreen extends React.Component {  
  //const category = props.selectedCategory;
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
            <Button className="buttonStyle" label="Me">{this.props.label}</Button>
            <Button className="buttonStyle" label="Coworker">{this.props.label}</Button>
            <Button className="buttonStyle" label="Both">{this.props.label}</Button>
          </div>
        </div>

        <div>
          <div style={textStyle}>Which day are you registering for?</div>
          <div className='row'>
          <Button className="buttonStyle" label="Today">{this.props.label}</Button>
          <Button className="buttonStyle" label="Yesterday">{this.props.label}</Button>
          <Button className="buttonStyle" label="Other">{this.props.label}</Button>
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


