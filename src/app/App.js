import React from "react";
import "react-notifications/lib/notifications.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RootRoutes from "./components/web/rootRoutes";
// import { ProductsContextProvider } from "./global/ProductsContext";
export default function App(){
    
    return (
      <div className="App">
       
        <ToastContainer />
        <RootRoutes/>
                
      </div>
    );
  
}
