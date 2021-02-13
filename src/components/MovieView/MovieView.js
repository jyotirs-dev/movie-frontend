import React from 'react';
import Button from 'react-bootstrap/Button';
import './MovieView.scss';

const movieView = (props)=>(
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src={props.imgsrc} alt="..." className="img-thumbnail movieview"/> 
            </div>
            <div className="col-md-8 ">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2">Release Date :<span className="text-muted"> {props.releasedate}</span></h6>
                    <p className="card-text">{props.storyline}</p>
                    <div class="card-header">
                        Cast:
                    </div>
                    <ul className="list-group list-group-flush">
                        {props.cast.map(cast=> <li className="list-group-item">{cast}</li>)}
                    </ul>
                    <Button className="btn btn-info float-right" onClick={props.handleEdit()}>Edit Details</Button>
                </div>
            </div>   
            </div>
        </div>
    </div>
    
     
            
);

export default movieView;