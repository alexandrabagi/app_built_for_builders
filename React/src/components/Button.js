import React from 'react'

const bStyle = {
    background: 'white',
    color: '#898989',
    margin: 20,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: 'normal'
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