import React from 'react';
import InputField from '../components/InputField'
import Button from './../components/Button'
import Modal from '../components/Modal'
import CalendarModal from '../components/CalendarModal';
import SaveModal from '../components/SaveModal';
import '../App.css';
import Picker from 'react-mobile-picker';

export default class HourRegistrationScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueGroups: {
        hour: '00',
        minute: '00'
      },
      optionGroups: {
        hour: ['00', '01', '02', '03', '04', '05', '06', '07', '08'],
        minute: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
      },
      buttonsRow1: [
        { id: 0, label: "Me", selected: false },
        { id: 1, label: "Coworker", selected: false, onClick: () => { } },
      ],
      buttonsRow2: [
        { id: 3, label: "Today", selected: false },
        { id: 4, label: "Yesterday", selected: false },
        { id: 5, label: "Other", selected: false }
      ],
      showModal: false,
      showCalendarModal: false,
      showSaveModal: false,
      coworker: 'Coworker',
      calendarDate: 'Other',
      inputLabel: 'Tap here to describe what you worked on.',
      inputValue: ''
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.openCalendarModal = this.openCalendarModal.bind(this)
    this.closeCalendarModal = this.closeCalendarModal.bind(this)

    this.openSaveModal = this.openSaveModal.bind(this)
    this.closeSaveModal = this.closeSaveModal.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  getCoworker = (coworkerName) => {
    console.log('Value from HourReg: ' + coworkerName)
    this.setState({ coworker: coworkerName })
  }

  getDate = (calendarDate) => {
    console.log('Value from CalendarModal: ' + calendarDate)
    this.setState({ calendarDate: calendarDate })
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  openCalendarModal() {
    this.setState({
      showCalendarModal: true
    })
  }

  openSaveModal() {
    this.setState({
      showSaveModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  closeCalendarModal() {
    this.setState({
      showCalendarModal: false
    });
  }

  closeSaveModal() {
    this.setState({
      showSaveModal: false
    })
  }

  changeButtonState(id, index) {
    let buttonState = []
    if (id > 2) buttonState = this.state.buttonsRow2
    buttonState.map((button) => button.selected = false)
    buttonState[index].selected = !buttonState[index].selected
    this.setState(buttonState)
  }

  changeSelected = (index) => {
    let selectedState = this.state.buttonsRow1[index]
    selectedState.selected = !selectedState.selected
    this.setState(selectedState)
  }

  // Update the timepicker value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }))
  }

  onChangeInput(evt) {
    this.setState({
      inputValue: evt.target.value,
      inputLabel: 'Tap here to describe what you worked on.',
    })
  }

  clearAll() {
    this.setState({
      valueGroups: {
        hour: '00',
        minute: '00'
      },
      selectedButton: null,
      buttonsRow1: [
        { id: 0, label: "Me", selected: false },
        { id: 1, label: "Coworker", selected: false, onClick: () => { } },
      ],
      buttonsRow2: [
        { id: 3, label: "Today", selected: false },
        { id: 4, label: "Yesterday", selected: false },
        { id: 5, label: "Other", selected: false }
      ],
      showModal: false,
      showCalendarModal: false,
      coworker: 'Coworker',
      calendarDate: 'Other',
      inputValue: ''
    })
  }

  render() {
    const textStyle = {
      fontSize: '40px',
      color: 'rgba(8, 67, 135, 0.8)',
      padding: '10px'
    }

    const { optionGroups, valueGroups } = this.state;

    return (

      <div className="content-area">
        <div>
          <div style={textStyle}>Who are you registering?</div>
          <div className='row'>

            <Button
              id={this.state.buttonsRow1[0].id}
              label={this.state.buttonsRow1[0].label}
              selected={this.state.buttonsRow1[0].selected}
              onClick={() => this.changeSelected(0)}
            />

            <Button
              id={this.state.buttonsRow1[1].id}
              label={this.state.coworker}
              selected={this.state.buttonsRow1[1].selected}
              onClick={() => {
                this.openModal()
                this.changeSelected(1)
              }} />
            <Modal
              show={this.state.showModal}
              onClose={this.closeModal}
              animation={false}
              selectedCoworkerM={this.getCoworker} />
          </div>
        </div>

        <div>
          <div style={textStyle}>Which day are you registering for?</div>
          <div className='row'>
            <Button id={this.state.buttonsRow2[2].id} label={this.state.buttonsRow2[0].label} selected={this.state.buttonsRow2[0].selected} onClick={() => this.changeButtonState(this.state.buttonsRow2[0].id, 0)} />
            <Button id={this.state.buttonsRow2[1].id} label={this.state.buttonsRow2[1].label} selected={this.state.buttonsRow2[1].selected} onClick={() => this.changeButtonState(this.state.buttonsRow2[1].id, 1)} />
            <Button
              id={this.state.buttonsRow2[2].id}
              label={this.state.calendarDate}
              selected={this.state.buttonsRow2[2].selected}
              onClick={() => {
                this.openCalendarModal()
                this.changeButtonState(this.state.buttonsRow2[2].id, 2)
              }} />
            <CalendarModal
              show={this.state.showCalendarModal}
              onClose={this.closeCalendarModal}
              animation={false}
              chosenDate={this.getDate} />
          </div>
        </div>

        <div>
          <InputField
            label={this.state.inputLabel}
            value={this.state.inputValue}
            onChange={this.onChangeInput.bind(this)}
            />
        </div>

        <div style={textStyle}>How long did you work on this task?</div>

        <div style={{
          width: "absolute",
          backgroundColor: "white",
          padding: "10px",
          margin: "20px",
          borderRadius: 10,
        }}>
          <Picker
            optionGroups={optionGroups}
            itemHeight={50}
            valueGroups={valueGroups}
            onChange={this.handleChange} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', fontSize: '30px', color: 'rgba(8, 67, 135, 0.8)' }}>hours</div>
            <div style={{ display: 'flex', fontSize: '30px', color: 'rgba(8, 67, 135, 0.8)' }}>minutes</div>
          </div>

        </div>
        <button
        className="hr-button-save"
        onClick={() => {
          this.openSaveModal()
          this.clearAll()
        }}
      >Save</button>

      <SaveModal
        className="modal"
        title='You successfully registered your working hours!'
        show={this.state.showSaveModal}
        onClose={this.closeSaveModal}
        animation={false}
      /> 
      </div>
    )
  }
}