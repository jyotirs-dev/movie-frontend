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
    // this.callMovieList();
  }
  
  fetch_retry = async (url, n) => {
    try {
        return await fetch(url)
    } catch(err) {
        if (n === 1) throw err;
        return await this.fetch_retry(url, n - 1);
    }
  }

  callMovieList() {
    this.fetch_retry(process.env.REACT_APP_MOVIELIST+this.state.activeGenre,2)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          movieList: result
        })
      });
  }

  callGenreList() {
    this.fetch_retry(process.env.REACT_APP_GENRELIST,2)
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

  componentDidUpdate(prevProps, prevState){
    if (prevState.activeGenre !== this.state.activeGenre) {
      this.callMovieList();
    }
    
  }

  render(){
    // let movieList = this.state.apiResponse.map(movie=> <ul>{movie.title}</ul>)
    return (
     
      <div>
        <div style={{width:"20%",float:'left'}}>
          <GenreList genreList={this.state.genreList} onSelectGenre={this.onSelectGenre}/>
        </div>
        <div style={{width:"80%", float:'right'}}>
          <MovieList movieList={this.state.movieList} history={this.props.history}/>
        </div>
      </div>
    
    );
  }
}

export default MovieInfo;
