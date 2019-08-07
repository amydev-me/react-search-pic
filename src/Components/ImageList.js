import React from 'react';

function ImageItem(props){
    return <img src={props.src} alt={props.alt} />;
}


const ImageList = props => {
    const images = props.images.map(({description, id, urls}) => {
         return  <ImageItem key={id} src={urls.regular} alt={description}/>;
    });
    return <div>{images}</div>
}

export default ImageList;