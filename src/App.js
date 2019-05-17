import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Router from './routers/Router'

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/cart'>Cart ({cart.length})</NavLink> </li>
    </ul>
  </nav>
)
class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigation {...this.props} />
        <Router />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default withRouter(connect(mapStateToProps)(App));
