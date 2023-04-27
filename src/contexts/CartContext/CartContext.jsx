import { createContext, useState } from "react";

export const CartContext = createContext();

// const ItemsInStock = [];
const Cuenta = 0;

export const ItemsProvider = ({children}) => {
    // const [items, setItems] = useState(ItemsInStock);
    const [cuenta, setCount] = useState(Cuenta);

    const increment = () => {
        setCount(cuenta + 1);
    };

    const decrement = () => {
        setCount(cuenta - 1);
    };

    return(
        <CartContext.Provider value = {{ cuenta, increment, decrement}}>{children}</CartContext.Provider>
    )
}

