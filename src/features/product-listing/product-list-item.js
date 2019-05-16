import React from 'react'
import AddButton from './add-button'
import RemoveButton from './remove-button'

export default function ProductListItem(props) {

     return (
        <div className='product-list-item'>
            <h3>{props.product.name}</h3>
            < img 
            height = {100}
            title = {props.product.name}
            src = {`/products/${props.product.image}`}
            alt=''
            />
            
            <div>{ props.product.description }</div>
            <div>${ props.product.price }</div>
            <div>
                <AddButton 
                cartItem={props.cartItem} 
                product={props.product}
                addToCart={props.addToCart}/>

                {
                    props.cartItem?
                    <RemoveButton 
                    cartItem={props.cartItem} 
                    product={props.product}
                    removeFromCart={props.removeFromCart}/> : null
                }
                
            </div>
        </div>
    )
}