import React from 'react';
import './GenreListChild.scss';

const genreListChild = (props)=>(
    <li className={props.active==props.genre?'genrelists active':'genrelists'} onClick={props.handleChange}>{props.genre}</li>    
);

export default genreListChild;