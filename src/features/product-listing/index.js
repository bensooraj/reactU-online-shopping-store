import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux';
import fetchAPI from "../../modules/fetch-api";

class ProductListing extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props;
        const url = "https://36f030a6-d96d-4984-b577-7c53a3e2e065.mock.pstmn.io/products/products.json";
        
        fetchAPI('GET', url).then(json => {
            console.log(Object.keys(json));
            loadProducts(json.products)
        })
    }

    render() {
        const {
            addToCart,
            removeFromCart,
            products,
            cart
        } = this.props;

        return (
            <div className='product-listing '>
                {
                    products.map( product => 
                        <ProductListItem 
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartItem={cart.filter( cartItem => cartItem.id === product.id )[0]}
                        />
                    ) 
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    products: state.products,
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (products) => {
            dispatch({
                type: 'LOAD',
                payload: products
            })
        },
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