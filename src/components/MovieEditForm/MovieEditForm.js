import React from 'react';
import Button from 'react-bootstrap/Button';

const movieEditForm = (props)=>(
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src={props.imgsrc} alt={props.title} className="img-thumbnail"/> 
            </div>
            <div className="col-md-8">
                <form onSubmit={(evt)=>props.handleSubmit(evt)}>

                    <div className="form-group row">
                        <label for="title" className="col-sm-2 col-form-label">Title:</label>
                        <div className="col-sm-10">
                        <input defaultValue={props.title} name="title" type="text" className="form-control" id="title" aria-describedby="emailnameHelp" placeholder="Enter Title" onChange={(evt)=>props.handleChange(evt)}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="releaseDate" className="col-sm-2 col-form-label">Release Date</label>
                        <div className="col-sm-10">
                        <input defaultValue={props.releaseDate} name="releaseDate" type="text" className="form-control" id="releaseDate" placeholder="Release Date" onChange={(evt)=>props.handleChange(evt)}/>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="storyLine" className="col-sm-2 col-form-label">Story Line</label>
                        <div className="col-sm-10">
                        <textarea defaultValue={props.storyline} name="storyline" className="form-control" id="storyLine" rows="3" onChange={(evt)=>props.handleChange(evt)}></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="actorslist" >Cast:</label>
                        {props.cast.map((cast,idx)=> <input defaultValue={cast} name="actors" type="text" className="form-control" onChange={(evt)=>props.handleArr(evt,idx)}/>)}
                        

                        
                    </div>

                    <Button type="submit" className="btn btn-primary float-right">Save Details</Button>

                </form>   
            </div>
        </div>
    </div>
    
     
            
);

export default movieEditForm;