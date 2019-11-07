import React from 'react';

export const ImageThumbnail = props => (
  <div>

    <img
    key={props.image.id}
    className=''
    src={require('../images/'+ props.image.id+'.jpg')}
    alt="brick"
    onClick={props.onClick} />
    <h3>{props.image.name}</h3>
  </div>
);