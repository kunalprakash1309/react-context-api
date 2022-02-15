import React, {createContext, useEffect, useState} from 'react'
import { addItemToCart, removeItemFromCart, filterItemForCart, totalItemCount, totalAmountCount } from './cart.utils'

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    cartItemsCount: 0,
    total: 0
})

export const CartPovider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)
    const toggleHidden = () => setHidden(!hidden)
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItem = (item) => setCartItems(filterItemForCart(cartItems, item))

    useEffect(() => {
        setCartItemsCount(totalItemCount(cartItems))
        setTotal(totalAmountCount(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItem,
            cartItemsCount,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}