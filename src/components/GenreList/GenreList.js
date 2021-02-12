import React, {Component} from 'react';

class GenreList extends Component{
  
  constructor(props) {
    super(props);
    this.state = { genreList: [] };
  }

  callAPI() {
    fetch(process.env.REACT_APP_GENRELIST)
      .then(res => res.json())
      .then(
      (result) => {
          console.log(result)
        this.setState({
            genreList: result
        })
      });
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    let genreList = this.state.genreList.map((genre,idx)=> <li key={idx}>{genre}</li>)
    return (
      <div className="App">
        <ul>
        {genreList}
        </ul>
      </div>
    );
  }
}

export default GenreList;
