import React from 'react';

export const ImageThumbnail = props => (
  <div>

    <img
    key={props.image.id}
    style={Object.assign({}, ...props.image.filters)}
    className={props.image.selected ? 'selected' : ''} 
    src={require('../images/'+ props.image.id+'.jpg')}
    alt="brick"
    onClick={props.onClick} />
    <h3>{props.image.id}</h3>
  </div>
);