import React, { Component } from 'react';
import MovieEditForm from '../../components/MovieEditForm/MovieEditForm';
import Spinner from "../../components/UI/Spinner/Spinner";

class MovieEdit extends Component {
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
  handleArr = (evt,idx)=>{
    let newState = {...this.state.apiResponse}
    let newactors = newState[evt.target.name].map((actor,_idx)=>{
      if (_idx !== idx) return actor;
    // this is gonna create a new object, that has the fields from input
    return evt.target.value;
    })
    this.setState(prevState =>{
      return{
           ...prevState,
           apiResponse: {
             ...prevState.apiResponse,
            [evt.target.name]:newactors
            },
      }
   })
  }
  handleChange = (event)=>{
    this.setState(prevState =>{
      return{
           ...prevState,
           apiResponse: {
             ...prevState.apiResponse,
            [event.target.name]:event.target.value
            },
      }
   })
   
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.apiResponse)
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.apiResponse)
  };
  fetch(process.env.REACT_APP_MOVIEDETAILS+this.props.match.params.movieid, requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          console.log(response)
          this.props.history.push("/my-app/"+this.props.match.params.movieid)
      })
      .catch(error => {
          // setErrorMessage(error);
          console.error('There was an error!', error);
      });
  }

  componentDidMount(){
    this.callAPI();
  }

  render() {
    let movieEdit = <Spinner/>
    if(this.state.loading){
        var movieObject = this.state.apiResponse;
        movieEdit = <MovieEditForm 
                        imgsrc = {movieObject.posterurl}
                        title = {movieObject.title}
                        imdbRating={movieObject.imdbRating}
                        releaseDate = {movieObject.releaseDate}
                        storyline = {movieObject.storyline}
                        cast = {movieObject.actors}
                        handleChange = {this.handleChange}
                        handleArr = {this.handleArr}
                        handleSubmit={this.handleSubmit}
                        />
    }
    return (
      <>
      {movieEdit}
      </>
    );
  }
}

export default MovieEdit;
