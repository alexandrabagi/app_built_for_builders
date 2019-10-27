import React from 'react';
import Brick from './brick.jpg';

export const ImageThumbnail = props => (
  <img
    key={props.image.id}
    style={Object.assign({}, ...props.image.filters)}
    className={props.image.selected ? 'selected' : ''} 
    src={Brick} 
    alt="brick"
    onClick={props.onClick} />
);