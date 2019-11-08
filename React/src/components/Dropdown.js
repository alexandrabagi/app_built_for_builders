import React from 'react';
import Dropdown from 'react-dropdown'

/*const options = [
    { id: 0, name: 'Anders, Robert' },
    { id: 1, name: 'Kazmierczak, Leo' },
    { id: 2, name: 'Muller, Frank' },
    { id: 3, name: 'Nielsen, Mikkel' },
    { id: 4, name: 'Sandberg, Rudi' }
]*/

const options = [
    'Anders, Robert', 'Kazmierczak, Leo', 'Muller, Frank', 
    'Nielsen, Mikkel', 'Sandberg, Rudi'
]

class DropdownMenu extends React.Component {
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
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
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

export default DropdownMenu
