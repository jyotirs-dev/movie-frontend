import React, {Component} from 'react';
import MovieView from '../../components/MovieView/MovieView';
import Spinner from "../../components/UI/Spinner/Spinner";

class MovieDetail extends Component{
  
  constructor(props) {
    super(props);
    this.state = { 
        apiResponse: [],
        loading: false 
    };
  }

  callAPI() {
    fetch(process.env.REACT_APP_MOVIEDETAILS+this.props.match.params.movieid)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          apiResponse: result,
          loading:true
        })
      });
  }

  handleEdit = ()=>{
    this.props.history.push(this.props.match.params.movieid+"/edit");
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    let movieSummary = <Spinner/>
    if(this.state.loading){
        var movieobj = this.state.apiResponse;
        movieSummary = <MovieView 
                        imgsrc = {movieobj.posterurl}
                        title = {movieobj.title}
                        releasedate = {movieobj.releaseDate}
                        storyline = {movieobj.storyline}
                        cast = {movieobj.actors}
                        handleEdit = {this.handleEdit}
                        />
    }
    
    return (
      <>
        {movieSummary}
      </>
    );
  }
}

export default MovieDetail;
