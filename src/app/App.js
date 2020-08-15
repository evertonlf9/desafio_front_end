import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../core/store/configureStore';

import Home from '../views/home/home';
import Promotion from '../views/promotion/promotion';
import Exclusive from '../views/exclusivo/exclusivo';
import Favorito from '../views/favorito/favorito';
import Details from '../views/details/details';

import './App.scss';

function App(props) {
  
  return (
    <>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={props => <Home match={props.match} {...props}/>} />
            <Route exact path="/all" render={props => <Home match={props.match} {...props}/>} />
            <Route exact path="/promocao" render={props => <Promotion match={props.match} {...props}/>} />
            <Route exact path="/exclusivo" render={props => <Exclusive match={props.match} {...props}/>} />
            <Route exact path="/favorito" render={props => <Favorito match={props.match} {...props}/>} />
            <Route exact path="/details/:id" render={props => <Details match={props.match} {...props}/>} />
          </Switch>
        </>
      </ConnectedRouter>
     
    </>
  );
}

export default App;