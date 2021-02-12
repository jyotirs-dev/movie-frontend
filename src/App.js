import React from 'react';
import MovieInfo from './container/MovieInfo/MovieInfo';
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
          <Redirect to="/my-app" />
        </Route>
        <Route path="/my-app" exact component={MovieInfo} />
        </Switch>
        
      </Layout>
     
    </div>
  );
}

export default App;
