import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieList extends Component{
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

//   callAPI() {
//     fetch(process.env.REACT_APP_MOVIELIST)
//       .then(res => res.json())
//       .then(
//       (result) => {
//         this.setState({
//           apiResponse: result
//         })
//       });
//   }

//   componentDidMount(){
//     this.callAPI();
//   }

  render(){
    let movieList = this.props.movieList.map(movie=> <li key={movie.id}><Link to={`moviesinfo/${movie.id}`}>{movie.title}</Link></li>)
    return (
      <div className="App">
        <ul>
        {movieList}
        </ul>
      </div>
    );
  }
}

export default MovieList;
