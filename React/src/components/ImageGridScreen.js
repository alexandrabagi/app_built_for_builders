import React from 'react';

import { ImageThumbnail } from './ImageThumbnail';

export const ImageGridScreen = props => (
  <React.Fragment>
    <div className="sample-images blocks-container">
      {
        props.images.map(image => {
          return <ImageThumbnail 
            image={image} 
            onClick={() => props.toggleImageSelect(image.id)} 
            showButtons={props.showButtons} 
            />;
            
        })
      }
    </div>
  </React.Fragment>
);