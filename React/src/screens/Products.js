import React from 'react';

<<<<<<< HEAD
class ProducGridScreen extends React.Component {
=======
class ProductScreen extends React.Component {
>>>>>>> alexandra_hour_reg

    categoryId = this.props.match.params.categoryId
    
    render() {
        return (
       <div className="app">
          <h1>Category</h1>
          <h3>Id =  {this.categoryId}</h3>
        </div>
      );
    }
};

<<<<<<< HEAD
export default ProducGridScreen;
=======
export default ProductScreen;
>>>>>>> alexandra_hour_reg
