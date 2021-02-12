import React from 'react';
import MovieInfo from './container/MovieInfo/MovieInfo';
import MovieDetail from './components/MovieDetail/MovieDetail';
import UserInfo from './container/UserInfo/UserInfo';
import Layout from './components/Layout/Layout';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App(props) {
  return (
    <div >
      <Layout>
        <Switch>
        <Route exact path="/">
          <Redirect to="/my-app/moviesinfo" />
        </Route>
        <Route path="/my-app/moviesinfo" exact component={MovieInfo} />
        <Route path="/my-app/moviesinfo/:movieid" component={MovieDetail} />
        </Switch>
        
      </Layout>
     
    </div>
  );
}

export default App;
