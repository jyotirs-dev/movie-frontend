import React from 'react';
import './GenreListChild.scss';

const genreListChild = (props)=>(
    <li onClick={props.handleChange}>{props.genre}</li>    
);

export default genreListChild;