import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';


class ProductGridScreen extends React.Component {

    categoryId = this.props.match.params.categoryId
    data = require('../images/'+this.categoryId + '/data.json');
    toggleImageSelect = (id) => {
      // let imagesToUpdate = [...this.state.images];
      // let imageToUpdate = imagesToUpdate.find(image => image.id === id);
      // window.location = './products/'+ imageToUpdate.id;
    }


    render() {
        return (
       <div className="app">
         <div>
            <h2>{this.categoryId}</h2>
         </div>
         <ImageGridScreen
                  images={this.data.images}
                  toggleImageSelect = {this.toggleImageSelect}
                />
        
        </div>
      );
    }
};

export default ProductGridScreen;


