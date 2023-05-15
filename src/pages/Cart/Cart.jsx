import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Item from "../../components/Item/Item";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';




const Cart = () => {
    const { compra } = useContext(CartContext);

    function Formulario() {

        const [nombre, setNombre] = useState('');
        const [correo, setCorreo] = useState('');
        const [telefono, setTelefono] = useState('');
        const values = {
            nombre: nombre,
            correo: correo,
            telefono: telefono
        }
        const [compraID, setCompraID] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            const docRef = await addDoc(collection(db, "purchase"), {
                values,
            })
            setCompraID(docRef.id)
            setNombre("");
            setCorreo("");
            setTelefono("");
            
            // 
        };
        

        const labelStyle = {
            display: 'block',
            margin: '10px 0',
            borderRadius: '5px',
            paddingLeft: '10px',
            backgroundColor: '#f8f8f8',
            width: '100%',
            maxWidth: '500px',
        };

        const inputStyle = {
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            width: '100%',
            boxSizing: 'border-box',
        };

        return (
            <>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Correo electrónico:
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Teléfono:
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
            {compraID.length ?<Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Gracias por realizar tu compra con nosotros, el ID de su transacción es: {compraID}</Alert>
            </Stack> : null}
            
            </>
        );
    }


    return (
        <>
            <h3>Cart</h3>
            {compra.map(data => {
                return (
                    <div key={data.compra.id} style={{ margin: "20px" }}>
                        <Item data={data.compra} />
                    </div>

                )
            })}
            <Formulario />
        </>
    )
}

export default Cart

