import { createContext, useState } from "react";

export const CartContext = createContext();

// const ItemsInStock = [];
const Cuenta = 0;
const TotalCarrito = 0;
const Aux = 0;
const Compra = [];

export const ItemsProvider = ({children}) => {
    // const [items, setItems] = useState(ItemsInStock);
    const [cuenta, setCount] = useState(Cuenta);
    const [carrito, setCarrito] = useState(TotalCarrito);
    const [aux, setAux] = useState(Aux);
    const [compra, setCompra] = useState(Compra);

    const increment = () => {
        setCount(cuenta + 1);
        setAux(aux + 1);
    };

    const decrement = () => {
        setCount(cuenta - 1);
        setAux(aux + 1);
    };

    const click = () => {
        setCarrito(aux)
        setCount(0);
        // setCompra([...compra, producto]);
        // console.log(compra);
        
    };

    return(
        <CartContext.Provider value = {{ cuenta, carrito, compra, setCompra, increment, decrement, click}}>{children}</CartContext.Provider>
    )
}

