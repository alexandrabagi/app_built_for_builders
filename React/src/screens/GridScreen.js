import React from 'react';

import { FlipFilter, CircleCropFilter, ColourShiftFilter } from '../Filters';

import { FlipFilterButton } from '../components/FlipFilterButton';
import { CircleCropFilterButton } from '../components/CircleCropFilterButton';
import { ColourShiftFilterButton } from '../components/ColourShiftFilterButton';

import { ImageThumbnail } from '../components/ImageThumbnail';

export const GridScreen = props => (
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
    <div className="image-filters blocks-container">
      <FlipFilterButton onClick={() => props.handleFilterButtonClicked(FlipFilter)} />
      <CircleCropFilterButton onClick={() => props.handleFilterButtonClicked(CircleCropFilter)} />
      <ColourShiftFilterButton onClick={() => props.handleFilterButtonClicked(ColourShiftFilter)} />
    </div>
  </React.Fragment>
);