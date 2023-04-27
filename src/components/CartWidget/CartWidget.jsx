import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const CartWidget = () => {
    const { carrito } = useContext(CartContext);


    return <div>{carrito}🛒</div>;
}
export default CartWidget