import React from 'react';

import { ImageThumbnail } from '../components/ImageThumbnail';

export const MaterialGridScreen = props => (
  <React.Fragment>
    <div className="sample-images blocks-container">
      {
        props.images.map(image => {
          return <ImageThumbnail 
            image={image} 
            onClick={() => props.toggleImageSelect(image.id)} />;
        })
      }
    </div>
  </React.Fragment>
);