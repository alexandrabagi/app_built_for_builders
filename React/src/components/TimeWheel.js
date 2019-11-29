import React from 'react';
import PropTypes from 'prop-types';
import '../App.css' ;


class TimeWheel extends React.Component {
    state = {

        valueGroups: {
            hour: '00',
            minute: '00'
        },
        optionGroups: {
            hour: ['00', '01', '02', '03', '04', '05', '06', '07', '08'],
            minute: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
        },

    }


    render() {

        const { optionGroups, valueGroups } = this.state;

        return (
            <div className='time-wheel-container'>

            <div className='time-wheel-container-inner'>
            <ul className='column-time-wheel'>    
                {optionGroups.hour.map(value =>
                    <li className= 'time-wheel-number' key={value}>{value}</li>)}
            </ul>

            <div className='mytxt'>hours</div>

            </div>
            
            <div className='time-wheel-container-inner'>
            <ul className='column-time-wheel'>
                {optionGroups.minute.map(value =>
                    <li className= 'time-wheel-number' key={value}>{value}</li>)}
            </ul>
            <div className='mytxt'>min</div>
            </div>


            </div>
    );
    }
}

TimeWheel.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
};

export default TimeWheel;