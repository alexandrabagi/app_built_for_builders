import React from 'react';
import Popup from 'reactjs-popup';
import ButtonSubmit from './ButtonSubmit'

export default class PopUp extends React.Component {
    
    handleClick = () => {
        this.props.toggle();
    }
    
    render() {
        return(
            <div
                text="This is a Popup window">
                <ButtonSubmit 
                    label="Save" onClick={this.handleClick} />
            </div>
        );
    };
};