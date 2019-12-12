import React from 'react';
import PropTypes from 'prop-types';

export default class SaveModal extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
    }

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
    )
  }
}

SaveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  onSelectCoworker: PropTypes.func,
}