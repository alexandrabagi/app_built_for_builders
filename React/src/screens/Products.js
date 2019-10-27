import React from 'react';

class ProducGridScreen extends React.Component {

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

export default ProducGridScreen;
