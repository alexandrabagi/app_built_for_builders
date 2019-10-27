import React from 'react';

export const CircleCropFilterButton = props => (
  <button className="image-filter" onClick={props.onClick}>
    <svg width="180px" height="180px" viewBox="0 0 180 180">
        <g id="image-filter-circle-mask" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="43"></circle>
            <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="25"></circle>
            <circle id="Oval" stroke="#444444" strokeWidth="4" cx="90" cy="90" r="8"></circle>
        </g>
    </svg>
  </button>
);