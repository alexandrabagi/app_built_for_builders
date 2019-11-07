import React from 'react'

const bStyle = {
    background: 'white',
    color: '#898989',
    margin: 20,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: 'normal',
    outline: 'none',
};

const bActiveStyle = {
    background: 'white',
    color: '#084387',
    margin: 20,
    borderRadius: 10,
    fontSize: 28,
    fontWeight: 'bold',
    outline: 'none',
    border: '4px solid #084387',
    
}

const Button = props => (
    <button style={!props.selected? bStyle : bActiveStyle}  onClick={props.onClick}>
        {props.label}
    </button>
);

export default Button;