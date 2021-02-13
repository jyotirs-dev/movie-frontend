import React, {Component} from 'react';
import './MovieList.scss';

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
  handleSelect = (id)=>{
  this.props.history.push(this.props.history.location.pathname+"/"+id);
  }

  render(){
    let movieList = this.props.movieList.map(movie=> <div className="card col-md-8 	col-xl-6" key={movie.id} onClick={()=>this.handleSelect(movie.id)}><img className="card-img-top" id={movie.id} src = {movie.posterurl}/><div className="card-body"><h6 className="card-subtitle mb-2 text-muted">{movie.imdbRating}</h6><h5 className="card-title">{movie.title}</h5></div></div>)
    return (
      <div className="card-columns">
      
        {movieList}
        
      </div>
    );
  }
}

export default MovieList;
