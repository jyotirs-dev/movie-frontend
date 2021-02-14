import React, {Component} from 'react';
import GenreListChild from './GenreListChild/GenreListChild';
import Spinner from '../UI/Spinner/Spinner';
import './GenreList.scss';

class GenreList extends Component{
  handleChange(val){
      this.props.onSelectGenre(val);
  }
  render(){
    let genreList = <Spinner/>
    if(this.props.genreListLoaded){
      genreList = this.props.genreList.map((genre,idx)=>{
        return <GenreListChild 
        key={idx} 
        genre={genre}
        active={this.props.genreSelected} 
        handleChange={()=>this.handleChange(genre)}/>
      })
    }
    
    return (
      <div className="col-2 bd-side-bar filter-bar">
      <div className="genrelist">
        <span className="filterstyle">Filter By</span>
        <ul>
          {genreList}
        </ul>
        <span className="clearstyle" onClick={()=>this.handleChange("allmovies")}>Clear Filters</span>
      </div>
      </div>
    );
  }
}

export default GenreList;
