
import { useState, useEffect } from 'react';
import Item from "../Item/Item"
import { Link } from 'react-router-dom';

//FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const ItemList = ()=> {

    const [productos, setProductos] = useState([]);
    const q = query(collection(db, "productos"));

    useEffect(() => {
        const getProductos = async() => { 
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
            });
            setProductos(docs);
        };
        getProductos();
    }, [])//la q no puede ir aqui

    return(
        <>
            {productos.map(producto => {
                return(
                    <div key={producto.id} style={{ margin: "20px" }}>
                        <Link to= {`/item/${producto.id}`} style={{ textDecoration: 'none'}}>
                            <Item data={producto}/>
                        </Link>
                    </div>
                    
                )
            })}
        </>
    )
}
export default ItemList