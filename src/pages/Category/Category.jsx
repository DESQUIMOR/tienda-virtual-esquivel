import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

//FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from "firebase/firestore";
import Item from '../../components/Item/Item';
const Category = () => {

    let { category } = useParams();

    const [catData, setCatData] = useState([]);
    const q = query(collection(db, "productos"), where("category", "==", category));

    useEffect(() => {
        const getCatData = async() => { 
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
            });
            setCatData(docs);
            console.log(docs)
        };
        getCatData();
    }, [category])

    return (
        
        <div >
            <h3>Detail</h3>
            {catData.map((categoria) => {
                return(
                    <div key={categoria.id} style={{ margin: "20px" }}>
                        <Link to= {`/item/${categoria.id}`} style={{ textDecoration: 'none'}}>
                            <Item data={categoria}/>
                        </Link>
                    </div>
                    
                )
            })}
        </div >
    )
}

export default Category