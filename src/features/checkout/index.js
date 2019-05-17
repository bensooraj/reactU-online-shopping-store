import React from 'react'
import { connect } from 'react-redux';


import Cart from '../../features/cart'
import CheckoutForm from './form'
import fetchAPI from '../../modules/fetch-api';

function submitOrder(values, cart) {
    const {
        email,
        name
    } = values.order;

    const url = "http://www.mocky.io/v2/5cded3063000004e00430be8";
    fetchAPI('POST', url, {
        order: {
            name,
            email,
            order_items_attributes: cart.map(item => ({
                product_id: item.id,
                qty: item.quantity,
            }))
        }
    }).then(json => {
        if (json.errors) {
            alert('Something went wrong while placing the order');
            return;
        }
        document.location.href = `/orders/${json.id}`;
    }).catch(error => {
        console.log("submitOrder | fetchAPI: ", error);
    })
}

function Checkout(props) {
    const { cart } = props;
    return (
        <div>
            <div style={{ border: '1px solid black' }}>
                <Cart/>
            </div>

            <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />
        </div>
     )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Checkout);