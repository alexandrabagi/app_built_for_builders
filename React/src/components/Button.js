import React from 'react'

class Button extends React.Component {
    styles = {
        unselected: {
            background: 'white',
            color: '#898989',
            margin: 20,
            borderRadius: 10,
            fontSize: 28,
            fontWeight: 'normal'
        },
        selected: {
            background: 'white',
            color: '#084387',
            margin: 20,
            borderRadius: 10,
            fontSize: 28,
            fontWeight: 'bold',
            border: '4px solid #084387',
        },
    }

    state = {
        active: false
    }

    props = {
        label: '',
    }

    handleClick = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }
    render() {
        return (
        <button 
            style={this.state.active ? this.styles.selected : this.styles.unselected}
            onClick={this.handleClick}>
            {this.props.label}
        </button>
        )
    } 
};

export default Button;