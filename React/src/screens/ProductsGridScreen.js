import React from 'react';

import { ImageGridScreen } from '../components/ImageGridScreen';


class ProductGridScreen extends React.Component {

    categoryId = this.props.match.params.categoryId
    data = require('../images/'+this.categoryId + '/data.json');
    toggleImageSelect = (id) => {
      //Empty until we know what to do when we click on a specific product.
      //ImageGridScreen component require the toggleImageSelect method to not be null
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


