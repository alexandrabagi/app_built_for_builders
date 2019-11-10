import React from 'react';

export const ImageThumbnail = props => (
  <div>
    <table className={props.showButtons ? 'buttons-show' : 'buttons-hidden'}  >
      <tr>
        <th> <button>Add</button></th>
        <th> <label >{props.image.name}</label></th>
        <th>  <button>Remove</button></th>
      </tr>
    </table>

    <img
    key={props.image.id}
    className=''
    src={require('../images/'+ props.image.id+'.jpg')}
    alt="brick"
    onClick={props.onClick} />
    <h3>{props.image.name}</h3>
  </div>
);