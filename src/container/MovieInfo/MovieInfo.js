import React, {Component} from 'react';
import MovieList from '../../components/MovieList/MovieList';
import GenreList from '../../components/GenreList/GenreList';
import MovieHeader from '../../components/MovieHeader/MovieHeader';
import './MovieInfo.scss'

class MovieInfo extends Component{
  
  constructor(props) {
    super(props);
    this.state = { 
      movieList: [], 
      activeGenre: "allmovies",
      genreList:[],
      movieListLoaded:false,
      genreListLoaded:false
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
          movieList: result,
          movieListLoaded:true
        })
      });
  }

  callGenreList() {
    this.fetch_retry(process.env.REACT_APP_GENRELIST,2)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          genreList: result,
          genreListLoaded:true
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
    return (
     
      <div className="movieinfo container-fluid">
        <div className="row">
          <GenreList 
          genreList={this.state.genreList} 
          onSelectGenre={this.onSelectGenre} 
          genreSelected={this.state.activeGenre}
          genreListLoaded={this.state.genreListLoaded}
          />
        <div className="col-10 ml-auto">
          <MovieHeader/>
          <MovieList 
          movieList={this.state.movieList}
          movieListLoaded={this.state.movieListLoaded}
          history={this.props.history}/>
        </div>
        </div>
      </div>
    
    );
  }
}

export default MovieInfo;
