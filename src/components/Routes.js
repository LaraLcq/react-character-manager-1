import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Home from "./establishments/Home"
import Test from "./establishments/Test"
import Edit from "./establishments/Edit"
import Add from "./establishments/Add"


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/character/:id" component={Edit} />
        <Route exact path="/character/add" component={Add} />
        <Route exact path="/test/:user" component={Test} />
    </Switch>)

export default Routes