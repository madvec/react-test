import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import Transaction from './containers/Transaction';
import NotFound from './containers/NotFound';

export default function Routes() {    
    return (
        <Switch>
            <Route exact path="/">
                <Login login="false"></Login>
            </Route>
            <Route exact path="/login">
                <Login login="false"></Login>
            </Route>
            <Route exact path="/home">
                <Home login="true"></Home>
            </Route>
            <Route exact path="/transaction">
                <Transaction login="true"></Transaction>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
};