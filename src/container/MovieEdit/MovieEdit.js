import React, { Component } from 'react';

class MovieEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        apiResponse: [],
        title:"",
        year:"",
        releaseDate:"",
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
  componentDidUpdate(){
    
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
          this.props.history.push("/my-app/moviesinfo/"+this.props.match.params.movieid)
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
    console.log(this.state.apiResponse)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="title" defaultValue={this.state.apiResponse.title} onChange={this.handleChange} />
        </label>
        <label>
          Year:
          <input type="text" name="year" defaultValue={this.state.apiResponse.year} onChange={this.handleChange} />
        </label>
        <label>
          Release Date:
          <input type="text" name="releaseDate" defaultValue={this.state.apiResponse.releaseDate} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MovieEdit;
