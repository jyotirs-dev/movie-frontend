import React, {Component} from 'react';

class GenreList extends Component{
  
  constructor(props) {
    super(props);
  }
  handleChange(val){
      this.props.onSelectGenre(val);
  }
  render(){
    let genreList = this.props.genreList.map((genre,idx)=> <li key={idx} onClick={()=>this.handleChange(genre)}>{genre}</li>)
    return (
      <div className="App">
        <ul>
        {genreList}
        <li onClick={()=>this.handleChange("allmovies")}>Reset</li>
        </ul>
      </div>
    );
  }
}

export default GenreList;
