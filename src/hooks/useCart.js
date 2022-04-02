import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart=(products)=>{
    const[cart,setCart]=useState([]);
    
    useEffect(()=>{
        // console.log('local storage first time');
    const storedCart=getStoredCart();
    const saveCart=[];
    // console.log(storedCart);
     for(const id in storedCart){
        //  console.log(id);
        const addedProduct=products.find(product=>product.id===id)
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            // console.log(addedProduct);
            saveCart.push(addedProduct);
        }
     }
     setCart(saveCart);
    //  console.log('loacal storage finish');
    },[products])


    return [cart,setCart];
}
export default useCart;


