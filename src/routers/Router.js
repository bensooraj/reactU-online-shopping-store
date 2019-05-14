import React from 'react'
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/homepage'
import CartPage from '../pages/cartpage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/cart' component={CartPage}/>
    </Switch>
)

export default Router;