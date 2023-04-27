// import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
function ItemCount() {
    // const {items} = useContext(CartContext);
    const {cuenta} = useContext(CartContext);
    const {increment} = useContext(CartContext);
    const {decrement} = useContext(CartContext);
    const {click} = useContext(CartContext);
    // const [count, setCount] = useState(0);
    

    // const increment = () => {
    //     setCount(count + 1);
    // };

    // const decrement = () => {
    //     setCount(count - 1);
    // };

    const buttonStyle = {
        padding: "10px 15px",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        border: "none",
        margin: "20px 5px",
        cursor: "pointer",
    };

    const counterStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 20px",
        fontSize: "30px",
        fontWeight: "bold",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    };


    return (
        <div>
            <div style={containerStyle}>
                <button style={buttonStyle} onClick={decrement}>-</button>
                <span style={counterStyle}>{cuenta}</span>
                <button style={buttonStyle} onClick={increment}>+</button>
            </div>
            <button style={{ width: "auto", padding: "8px" }} onClick={click}>Agregar al carrito</button>
        </div>

    );
}

export default ItemCount;
