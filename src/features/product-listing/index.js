import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux';

import { cartItemsWithQuantity } from '../cart'

function ProductListing(props) {
    return (
        <div className='product-listing '>
            {
                props.products.map( product => 
                    <ProductListItem 
                        product={product}
                        addToCart={props.addToCart}
                        cartItem={props.cart.filter( cartItem => cartItem.id === product.id )[0]}
                    />
                ) 
            }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);