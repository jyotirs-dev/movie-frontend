import React, {Component} from 'react';

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
    let movieList = this.props.movieList.map(movie=> <li key={movie.id}>{movie.title}</li>)
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
