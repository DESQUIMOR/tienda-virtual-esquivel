import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const CartWidget = () => {
    const { cuenta } = useContext(CartContext);


    return <div>{cuenta}🛒</div>;
}
export default CartWidget