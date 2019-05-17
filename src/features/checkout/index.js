import React from 'react'
import { connect } from 'react-redux';

function Checkout(props) {
    return (
        <div></div>
     )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({
                type: 'ADD',
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: 'REMOVE',
                payload: item
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);