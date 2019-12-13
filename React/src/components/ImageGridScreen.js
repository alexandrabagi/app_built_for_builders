import React from 'react';
import { ImageThumbnail } from './ImageThumbnail';

export const ImageGridScreen = props => (
  <React.Fragment>
    <div className="sample-images blocks-container">
      {
        props.items.map(item => {
          return <ImageThumbnail 
          item={item} 
            onClick={() => props.toggleImageSelect(item.id)} 
            IncrementCountClick={() => props.IncrementCountClick(item)} 
            DecreaseCountClick={() => props.DecreaseCountClick(item)} 
            OrderProductClick={() => props.OrderProductClick(item)} 
            showButtons={props.showButtons}
            count  ={props.count}
            />
        })
      }
    </div>
  </React.Fragment>
);