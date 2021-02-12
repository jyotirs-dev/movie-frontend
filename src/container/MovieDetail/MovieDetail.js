import React, {Component} from 'react';

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
    console.log(this.state.apiResponse);
    console.log(this.props.match.params.movieid);
    let movieSummary = <h1>Loading</h1>
    // if(this.state.loading){
    //     var movieobj = this.state.apiResponse[0];
    //     movieSummary = Object.keys(movieobj).map((keyIG,idx)=>(
    //     <li key={idx}><span style={{textTransform:'capitalize'}}>{keyIG}</span> : {movieobj[keyIG]}</li>
    //     )
    //     )
    // }
    if(this.state.loading){
        var movieobj = this.state.apiResponse;
        movieSummary = <ul>
        <li ><span style={{textTransform:'capitalize'}}>Name</span> : {movieobj.title}</li>
        <li ><span style={{textTransform:'capitalize'}}>Year</span> : {movieobj.year}</li>
        <li ><span style={{textTransform:'capitalize'}}>Release Date</span> : {movieobj.releaseDate}</li>
        </ul>
    }
    
    return (
      <div className="App">
        {movieSummary}
        <button onClick={this.handleEdit}>EDIT</button>
      </div>
    );
  }
}

export default MovieDetail;
