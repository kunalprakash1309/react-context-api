import { createContext } from "react";

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {console.log("Hello")}
})

export default CartContext