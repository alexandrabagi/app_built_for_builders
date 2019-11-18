import React from 'react'

const Button = props => (
    <button
        className={!props.selected? "hr-button" : "hr-button-selected"}   
        onClick={props.onClick}>
        {props.label}
    </button>
);

export default Button;