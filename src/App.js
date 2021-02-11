import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/api/moviesdata")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          apiResponse: result
        })
      });
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    let movieList = this.state.apiResponse.map(movie=> <ul>{movie.title}</ul>)
    return (
      <div className="App">
        <li>
        {movieList}
        </li>
      </div>
    );
  }
}

export default App;
