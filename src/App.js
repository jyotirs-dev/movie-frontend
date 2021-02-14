import React from 'react';
// import UserInfo from './container/UserInfo/UserInfo';
import Layout from './components/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Containers
const MovieInfo = React.lazy(() => import('./container/MovieInfo/MovieInfo'));
const MovieDetail = React.lazy(() => import('./container/MovieDetail/MovieDetail'));
const MovieEdit = React.lazy(() => import('./container/MovieEdit/MovieEdit'));

function App(props) {
  return (
    <div >
      <Layout>
        <React.Suspense fallback={<Spinner/>}>
          <Switch>
          <Route exact path="/">
            <Redirect to="/my-app" />
          </Route>
          <Route path="/my-app" exact component={MovieInfo} />
          <Route path="/my-app/:movieid/edit" component={MovieEdit} />
          <Route path="/my-app/:movieid" exact component={MovieDetail} />
          </Switch>
        </React.Suspense>  
      </Layout>
     
    </div>
  );
}

export default App;
