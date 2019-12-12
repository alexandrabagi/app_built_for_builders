import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from './Dropdown'

class SaveModal extends React.Component {

  state = {
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
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
      padding: 50,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal-warning" >
          {this.props.children}
          <div style={{ paddingTop: '20px' }}>{this.props.title}</div>

          <button
            className="hr-button-save"
            onClick={() => { this.props.onClose() }}>
            Close
            </button>
        </div>
      </div>
    );
  }
}

SaveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  onSelectCoworker: PropTypes.func,
};

export default SaveModal;