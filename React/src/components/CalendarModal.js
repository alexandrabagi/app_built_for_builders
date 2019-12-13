import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar'

export default class CalendarModal extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => {
    this.setState({ date })
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let today=date.getDate() + " "+ monthNames[parseInt(date.getMonth())];
    this.props.chosenDate(today)
  } 

  render() {
    if(!this.props.show) {
      return null;
    }
    
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }
    
    const modalStyle = {
      backgroundColor: 'white',
      borderRadius: 10,
      maxWidth: 700,
      maxHeight: 500,
      margin: '100 auto 0 auto',
    }
    
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
            <div className="header">
              <div>Choose a date</div>
            </div>
            <div className="col-centered">
              <Calendar
                className="mycalendar"
                onChange={this.onChange}
                value={this.state.date}
                locale="en"
              />
              </div>
              <button 
                className="hr-button-save"
                onClick={() => { this.props.onClose() }}>
                Save
              </button>           
          </div>
        </div>
    )
  }
}
    
CalendarModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}