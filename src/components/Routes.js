import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Home from "./establishments/Home"
import Edit from "./establishments/Edit"
import Add from "./establishments/Add"


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/character/:id" component={Edit} />
        <Route exact path="/character/add" component={Add} />
    </Switch>)

export default Routes