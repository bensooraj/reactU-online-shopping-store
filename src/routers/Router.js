import React from 'react'
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/homepage'
import CartPage from '../pages/cartpage'
import CheckOutPage from '../pages/checkoutpage'

const Router = () => (
    <Switch>
        <Route exact path='/'             component={HomePage}/>
        <Route exact path='/cart'         component={CartPage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
    </Switch>
)

export default Router;