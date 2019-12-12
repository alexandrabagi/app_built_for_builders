import React from 'react';
import Dropdown from 'react-dropdown'

const options = [
    'Anders, Robert', 'Kazmierczak, Leo', 'Muller, Frank', 
    'Nielsen, Mikkel', 'Sandberg, Rudi'
]

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
        }
        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect(option) {
        this.setState({ selected: option })
        console.log('Value from Dropdown: ' + option.value)
        this.props.selectedCoworker(option.value)
    }

    render() {
        const defaultOption = this.state.selected
        return(
            <section>
                <Dropdown 
                    options={options} 
                    onChange={this._onSelect} 
                    value={defaultOption} 
                    placeholder="Tap to choose you coworker's name" />
            </section>
        )
    }
}