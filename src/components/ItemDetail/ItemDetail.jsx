import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import Item from '../../components/Item/Item';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = () => {

    let { id } = useParams();

    const [producto, setProducto] = useState([]);
    const q = query(collection(db, "productos"), where(documentId(), "==", id));

    useEffect(() => {
        const getProducto = async() => { 
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
            });
            setProducto(docs);
        };
        getProducto();
    }, [id])

    return (
        <div >
            <h3>Detail</h3>
            {producto.map(producto => {
                return(
                    <div key={producto.id} style={{ margin: "20px", backgroundColor: "#dcdcdc", padding: "50px" }}>
                        
                            <Item data={producto}/>
                            <p style={{width: "350px", marginTop: "20px"}}> {producto.description}</p>
                            <div>
                                <ItemCount compra={producto} style={{margin: "8px"}}/>
                            </div>
                    </div>
                    
                )
            })}
        </div >
    )
}

export default ItemDetail