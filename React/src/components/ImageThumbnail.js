import React from 'react';

export const ImageThumbnail = props => (
  <div>
<<<<<<< HEAD
  <img
    key={props.image.id}
    style={Object.assign({}, ...props.image.filters)}
    className={props.image.selected ? 'selected' : ''} 
    src={require('../images/'+ props.image.id+'.jpg')} 
    onClick={props.onClick} />
  <h3>{props.image.id}</h3>

    </div>
);


// import React from 'react';

// export const ImageThumbnail = props => (
//   <img
//     key={props.image.id}
//     style={Object.assign({}, ...props.image.filters)}
//     className={props.image.selected ? 'selected' : ''} 
//     src={'https://source.unsplash.com/' + props.image.id + '/360x360'} 
//     onClick={props.onClick} />
// );
=======
    <img
    key={props.image.id}
    style={Object.assign({}, ...props.image.filters)}
    className={props.image.selected ? 'selected' : ''} 
    src={require('../images/'+ props.image.id+'.jpg')}
    alt="brick"
    onClick={props.onClick} />
    <h3>{props.image.id}</h3>
  </div>
);
>>>>>>> alexandra_hour_reg
