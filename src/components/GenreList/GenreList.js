import React, {Component} from 'react';
import GenreListChild from './GenreListChild/GenreListChild';
import './GenreList.scss';

class GenreList extends Component{
  handleChange(val){
    console.log(val);
      this.props.onSelectGenre(val);
  }
  render(){
    return (
      <div className="col-2 bd-side-bar filter-bar">
      <div className="genrelist">
        <span className="filterstyle">Filter By</span>
        <ul>
          {this.props.genreList.map((genre,idx)=>{
            return <GenreListChild key={idx} genre={genre} handleChange={()=>this.handleChange(genre)}/>
          })}
        </ul>
        <span className="clearstyle" onClick={()=>this.handleChange("allmovies")}>Clear Filters</span>
      </div>
      </div>
    );
  }
}

export default GenreList;
