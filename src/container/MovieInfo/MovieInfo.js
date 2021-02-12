import React, {Component} from 'react';
import MovieList from '../../components/MovieList/MovieList';
import GenreList from '../../components/GenreList/GenreList';

class MovieInfo extends Component{
  
  constructor(props) {
    super(props);
    this.state = { 
      movieList: [], 
      activeGenre: "allmovies",
      genreList:[]
    };
  }
  onSelectGenre = (val)=>{
    this.setState({
      activeGenre: val
    })
  }
  callMovieList() {
    fetch(process.env.REACT_APP_MOVIELIST+this.state.activeGenre)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          movieList: result
        })
      });
  }

  callGenreList() {
    fetch(process.env.REACT_APP_GENRELIST)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          genreList: result
        })
      });
  }

  componentDidMount(){
    this.callGenreList();
    this.callMovieList();
  }

  componentDidUpdate(){
    this.callMovieList();
  }

  render(){
    // let movieList = this.state.apiResponse.map(movie=> <ul>{movie.title}</ul>)
    return (
     
      <div>
        <div style={{width:"20%",float:'left'}}>
          <GenreList genreList={this.state.genreList} onSelectGenre={this.onSelectGenre}/>
        </div>
        <div style={{width:"80%", float:'right'}}>
          <MovieList movieList={this.state.movieList}/>
        </div>
      </div>
    
    );
  }
}

export default MovieInfo;
