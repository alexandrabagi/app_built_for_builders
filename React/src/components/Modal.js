import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from './Dropdown'
import SaveModal from './SaveModal'

export default class Modal extends React.Component {

  state = {
    selectedCoworker: '',
    showSaveModal: false
  }

  handleCoworker = (name) => {
    this.setState({ selectedCoworker: name })
    console.log('Value from Modal: ' + name)
    this.props.selectedCoworkerM(name)
  }

  openSaveModal() {
    this.setState({
      showSaveModal: true
    })
  }

  closeSaveModal() {
    this.setState({
      showSaveModal: false
    })
  }

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
      padding: 50
    }

    const modalStyle = {
      backgroundColor: 'white',
      borderRadius: 10,
      maxWidth: 700,
      maxHeight: 800,
      margin: '100 auto 0 auto',
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div className="header">
            <div>Choose Coworker</div>
          </div>
          <div className="dropdown">
            <DropdownMenu
              selectedCoworker={this.handleCoworker} />
          </div>
          <button
            className="hr-button-save"
            onClick={() => {
              this.state.selectedCoworker === '' ?
              this.openSaveModal() :
              this.props.onClose()
            }}>
            Save
            </button>
          <SaveModal
            title='Please choose a coworker!'
            show={this.state.showSaveModal}
            onClose={() => this.closeSaveModal()}
            animation={false}
          />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  onSelectCoworker: PropTypes.func,
}