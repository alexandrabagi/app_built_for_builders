import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';

export const MaterialGridScreen = props => (
  <React.Fragment>
    <div >
      <ImageGridScreen
                  items={props.materials}
                  toggleImageSelect={props.toggleImageSelect}
                  showButtons = {false}
                />
    </div>
  </React.Fragment>
);