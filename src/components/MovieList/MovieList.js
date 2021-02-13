import React, {Component} from 'react';
import MovieListChild from './MovieListChild/MovieListChild';
import './MovieList.scss';

class MovieList extends Component{
 
  handleSelect = (id)=>{
  this.props.history.push(this.props.history.location.pathname+"/"+id);
  }

  render(){
    return (
      <div className="card-columns">
        {
        this.props.movieList.map(movie=>{
          return <MovieListChild
          key={movie.id}
          id={movie.id}
          posterurl={movie.posterurl}
          imdbRating={movie.imdbRating}
          title={movie.title}
          handleSelect = {this.handleSelect}
          />
        })
        }
      </div>
    );
  }
}

export default MovieList;
