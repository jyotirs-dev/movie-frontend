import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const movieListChild = (props)=>(
    <div className="card col-md-8 col-xl-6">
        <img className="card-img-top"
        alt={props.title} 
        id={props.id} 
        src = {props.posterurl} 
        onClick={()=>props.handleSelect(props.id)}
        />
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">
            <span><StarFill color="Gold"/></span> {props.imdbRating}
            </h6>
            <h5 className="card-title" onClick={()=>props.handleSelect(props.id)}>
                {props.title}
            </h5>
        </div>
    </div>
);

export default movieListChild;