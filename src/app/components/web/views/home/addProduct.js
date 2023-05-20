import React from "react";
import { useState } from "react";
import { db } from "../../../../../config/firebase.config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
//import { useSelector, useDispatch } from "react-redux";
//import { decrement, increment } from "../../../../redux/features/counterSlice";
// import { Link } from  'react-router-dom';
import Products from "./Products";


const AddProduct =() => {
    //state of products
    const [ products , setProducts ] = useState([]);
    // // getting products function
    // const getProducts = async () => {
    // const q =  query(collection(db,'Products'));
    // const productsArray= [];
    // const querySnapshot =  await getDocs(q);
    
    // querySnapshot.forEach((doc)=>{
    //         var data = doc.data();
            
    //         data.ID = doc.id;
    //         products.push({ ...data })
    //     // console.log(doc.id, '=>', doc.data())
    //     // console.log(products)  
    //     if(productsArray.length === doc.length){
    //         setProducts(productsArray);
    //     }
        
    //     });
    //     getProducts();
    // }  
    
    
    // useEffect(()=>{getProducts();},[]) 
    useEffect(
        () =>
        onSnapshot(collection(db,'Products'), (snapshot)=>
        setProducts(snapshot.docs.map((doc)=> ({
            id: doc.id, ...doc.data()
           })))
        )
        ,[]
    );
    
    
    
    
    
    return(
        <div>
            <div className="osahan-listing">
                <div className="p-3"> 
                    <div className="d-flex align-items-center">
                        <Link
                        className="font-weight-bold text-success text-decoration-none"
                        to="/"
                        >
                        <i className="icofont-rounded-left back-page" />
                        </Link>
                        <span className="font-weight-bold ml-3 h6 mb-0">Groceries</span>
                        <Link className="toggle ml-auto" to="#">
                        <i className="icofont-navigation-menu" />
                        </Link>
                    </div>
                </div>
            </div>
            {products.map( (singleProduct) =>
                <Products singleProduct={singleProduct} key={singleProduct.id} />)
            }
        
        </div>
    
)       

    
   
        
    
}

export default AddProduct;