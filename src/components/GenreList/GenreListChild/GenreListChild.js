import React from 'react';
import './GenreListChild.scss';

const genreListChild = (props)=>(
    <div className={props.active===props.genre?'genrelists active':'genrelists'} onClick={props.handleChange}>{props.genre}</div>    
);

export default genreListChild;