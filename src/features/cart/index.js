import React from 'react'
import {
    connect
} from 'react-redux'


export const cartItemsWithQuantity = (cartItems) => {
    return cartItems.reduce((acc, item) => {

        const filtereddItem = acc.filter(item2 => item2.id === item.id)[0];
        filtereddItem !== undefined ? filtereddItem.quantity++
            :
            acc.push({
                ...item,
                quantity: 1
            })
        return acc;
    }, [])
}