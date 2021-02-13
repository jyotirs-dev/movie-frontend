import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import './GenreList.scss';

class GenreList extends Component{
  
  // constructor(props) {
  //   super(props);
  // }
  handleChange(val){
      this.props.onSelectGenre(val);
  }
  render(){
    let genreList = this.props.genreList.map((genre,idx)=> <li key={idx} onClick={()=>this.handleChange(genre)}>{genre}</li>)
    return (
      <div className="genrelist">
        <h4>Filter By</h4>
        <ul>
        {genreList}
        </ul>
        <h5 onClick={()=>this.handleChange("allmovies")}>Clear Filters</h5>
      </div>
    );
  }
}

export default GenreList;
