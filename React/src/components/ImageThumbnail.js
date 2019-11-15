import React from 'react';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <th> <button className='button-add-remove' onClick={props.IncrementCountClick} >  <FontAwesomeIcon icon={faPlus} size="2x" /></button></th>
        <th> <label className='label-count'>{props.item.count}</label></th>
        <th>  <button className='button-add-remove' onClick={props.DecreaseCountClick}><FontAwesomeIcon icon={faMinus} size="2x" /></button></th>
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