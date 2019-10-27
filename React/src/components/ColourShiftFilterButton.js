import React from 'react';

export const ColourShiftFilterButton = props => (
  <button className="image-filter" onClick={props.onClick}>
    <svg width="180px" height="180px" viewBox="0 0 180 180">
        <g id="image-filter-tint" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group" transform="translate(42.000000, 45.000000)" stroke="#444444" strokeWidth="4">
                <circle id="Oval" cx="49" cy="28" r="26"></circle>
                <circle id="Oval" cx="28" cy="62" r="26"></circle>
                <circle id="Oval" cx="69" cy="62" r="26"></circle>
            </g>
        </g>
    </svg>
  </button>
);