import React, {Component} from 'react';
import MovieList from '../../components/MovieList/MovieList';
import GenreList from '../../components/GenreList/GenreList';

class MovieInfo extends Component{
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  // callAPI() {
  //   fetch(process.env.REACT_APP_MOVIELIST)
  //     .then(res => res.json())
  //     .then(
  //     (result) => {
  //       this.setState({
  //         apiResponse: result
  //       })
  //     });
  // }

  // componentDidMount(){
  //   this.callAPI();
  // }

  render(){
    // let movieList = this.state.apiResponse.map(movie=> <ul>{movie.title}</ul>)
    return (
     
      <div>
        <div style={{width:"20%",float:'left'}}>
          <GenreList/>
        </div>
        <div style={{width:"80%", float:'right'}}>
          <MovieList/>
        </div>
      </div>
    
    );
  }
}

export default MovieInfo;
