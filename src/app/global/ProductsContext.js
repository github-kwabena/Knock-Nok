import React, {useState, createContext, useEffect} from 'react'
import { db } from '../../config/firebase.config'
import { collection, query, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([])
  
    useEffect(async () =>{
        const prevProducts = products;
        const q = query(collection(db,'Products'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=> {
            var data = doc.data();
            data.ID = doc.id;
            prevProducts.push({
                ...data
            })
            
            setProducts({products: prevProducts})
            
        })
    },[])
    return (
    <div>
      <ProductsContextProvider value ={{products:[...products]}}>
        {props.children}
      </ProductsContextProvider>
    </div>
  )
}


