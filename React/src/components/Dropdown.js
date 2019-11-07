import React from 'react';
import Dropdown from 'react-dropdown'

const options = [
    'Anders, Robert', 'Kazmierczak, Leo', 'Muller, Frank', 'Nielsen, Mikkel', 'Sandberg, Rudi'
]

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect(option) {
        this.setState({selected: option})
    }

    render() {
        const defaultOption = this.state.selected
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
        return(
            <section>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Tap to choose you coworker's name" />
            </section>
        )
    }
}

export default DropdownMenu
