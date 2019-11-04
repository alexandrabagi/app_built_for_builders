import React from 'react'

const bStyle = {
    background: '#084387',
    color: 'white',
    margin: 20,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: 'bold',
};

const props = {
    label: '',
}

const Button = props => (
    <button style={bStyle} onClick={props.onClick}>
        {props.label}
    </button>
);

export default Button;