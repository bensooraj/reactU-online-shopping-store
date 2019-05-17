import React from 'react';

import fetchAPI from '../../modules/fetch-api';

class Order extends React.Component {
    state = {
        order: null
    }

    componentDidMount() {
        const url = `http://www.mocky.io/v2/5cdeda6d3000005a00430c15`;
        fetchAPI('GET', url)
        .then(json => {
            this.setState({
                order: json
            })
        })
    }

    renderOrder() {
        const { name, email , order_items } = this.state.order;
        return (
            <div>
                <h3>Order Info</h3>

                <div>Name: {name}</div>
                <div>Email: {email}</div>
                
                <h4>Items</h4>
                <ul>
                    {
                        order_items && order_items.map(item => {
                            const {qty, name, image, price} = item;

                            return (
                                <li>
                                    <img src={`/products/${image}`} width={32} alt=""/>
                                    { name }
                                    ({qty} @ price {price} = ${parseFloat(qty*price)})
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        const { order } = this.state;
        return (
             <div>
                 {
                    order?  this.renderOrder(): "Loading... "
                 }
             </div>
        )
    }
}

export default Order;