import React from 'react';

export const FlipFilterButton = props => (
  <button className="image-filter" onClick={props.onClick}>
    <svg width="180px" height="180px" viewBox="0 0 180 180">
        <g id="image-filter-flip" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group" transform="translate(45.000000, 45.000000)" stroke="#444444" strokeWidth="4">
                <path d="M34.8181818,88 L34.8181818,2 L9.81818182,2 C5.50031923,2 2,5.50031923 2,9.81818182 L2,80.1818182 C2,84.4996808 5.50031923,88 9.81818182,88 L34.8181818,88 Z" id="Path"></path>
                <path d="M88,88 L88,2 L63,2 C58.6821374,2 55.1818182,5.50031923 55.1818182,9.81818182 L55.1818182,80.1818182 C55.1818182,84.4996808 58.6821374,88 63,88 L88,88 Z" id="Path" transform="translate(71.590909, 45.000000) scale(-1, 1) translate(-71.590909, -45.000000) "></path>
            </g>
            <path d="M89.5,35 L89.5,144.015625" id="Line" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeDasharray="10"></path>
        </g>
    </svg>
  </button>
);