import React from 'react';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ImageThumbnail = props => (
  
  <div className='product-card-frame'>
    {/* 
    Added a table where the add/remove buttons will be shown together with the current count.
    Also the ImageThumbnail takes in a boolean value called showButtons, which can be used to toogle the visibility
    of the buttons. Currently the MaterialGridScreen does not show it, while the ProductGridScreen does.
    */}

<img
    key={props.item.id}
    className=''
    src={require('../images/'+ props.item.image+'.jpg')}
    //alt="brick"
    onClick={props.onClick} />
    
    <div style = {{margin: '0', height: 'auto',padding: '0'}}>
      <h3 style={{fontSize: '32px', marginTop: '15px', height: "1em"}}>{props.item.name}</h3>
    </div>
    <div style = {{fontSize: '28px', padding: '0', margin: '5' }}>{props.item.quantity} </div>
    <table className={props.showButtons ? 'buttons-show' : 'buttons-hidden'}  >
    <tbody>
      <tr>
        <th> <button className='button-add-remove' onClick={props.DecreaseCountClick }>  <FontAwesomeIcon icon={faMinus} size="2x" /></button></th>
        <th> <label className='label-count'>{props.item.count}</label></th>
        <th>  <button className='button-add-remove' onClick={props.IncrementCountClick}> <FontAwesomeIcon icon={faPlus} size="2x" /></button></th>
      </tr>
      </tbody>
      
    </table>
    <button className={props.showButtons ? 'button-order' : 'buttons-hidden'} onClick={props.OrderProductClick }> Order </button>
    
  </div>
)