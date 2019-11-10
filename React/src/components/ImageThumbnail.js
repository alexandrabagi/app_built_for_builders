import React from 'react';

export const ImageThumbnail = props => (
  <div>
    {/* 
    Added a table where the add/remove buttons will be shown together with the current count.
    Also the ImageThumbnail takes in a boolean value called showButtons, which can be used to toogle the visibility
    of the buttons. Currently the MaterialGridScreen does not show it, while the ProductGridScreen does.
    */}

    <table className={props.showButtons ? 'buttons-show' : 'buttons-hidden'}  >
    <tbody>
      <tr>
        <th> <button onClick={props.IncrementCountClick} >Add</button></th>
        <th> <label >{props.item.count}</label></th>
        <th>  <button onClick={props.DecreaseCountClick}>Remove</button></th>
      </tr>
      </tbody>
    </table>

    <img
    key={props.item.id}
    className=''
    src={require('../images/'+ props.item.image+'.jpg')}
    alt="brick"
    onClick={props.onClick} />
    <h3>{props.item.name}</h3>
  </div>
);