import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';

export const MaterialGridScreen = props => (
  <React.Fragment>
    <div >
      <ImageGridScreen
                  images={props.images}
                  toggleImageSelect={props.toggleImageSelect}
                  showButtons = {false}
                />
    </div>
  </React.Fragment>
);