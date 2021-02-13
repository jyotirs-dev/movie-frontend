import React from 'react';
import MovieInfo from './container/MovieInfo/MovieInfo';
import MovieDetail from './container/MovieDetail/MovieDetail';
// import UserInfo from './container/UserInfo/UserInfo';
import Layout from './components/Layout/Layout';
import MovieEdit from './container/MovieEdit/MovieEdit';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App(props) {
  return (
    <div >
      <Layout>
        <Switch>
        <Route exact path="/">
          <Redirect to="/my-app/moviesinfo" />
        </Route>
        <Route path="/my-app/moviesinfo" exact component={MovieInfo} />
        <Route path="/my-app/moviesinfo/:movieid/edit" component={MovieEdit} />
        <Route path="/my-app/moviesinfo/:movieid" exact component={MovieDetail} />
        </Switch>
        
      </Layout>
     
    </div>
  );
}

export default App;
