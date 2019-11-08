import React from 'react';
import PropTypes from 'prop-types';

class CalendarModal extends React.Component {

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
          return null;
        }
    
        // The gray background
        const backdropStyle = {
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 50
        };
    
        // The modal "window"
        const modalStyle = {
          backgroundColor: 'white',
          borderRadius: 10,
          maxWidth: 700,
          maxHeight: 500,
          margin: '100 auto 0 auto',
        };
    
        return (
          <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
              {this.props.children}
                <div className="header">
                    <div>Choose a date</div>
                </div>
                
                <button 
                    className="close"
                    onClick={() => { this.props.onClose() }}>
                    Save
                </button>
            </div>
          </div>
        );
      }
    }
    
    CalendarModal.propTypes = {
      onClose: PropTypes.func.isRequired,
      show: PropTypes.bool,
      children: PropTypes.node,
    };
    
    export default CalendarModal;