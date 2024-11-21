import { useState,useEffect } from "react"

const useQuantity=(cartItems)=>{
    const [quantity,setQuantity]=useState();

    const findQuantity=(cartItems)=>{
        const total=cartItems.reduce((sum,item)=>sum+item.quantity,0);
        setQuantity(total);
    }
    useEffect(()=>{
        findQuantity(cartItems);
    },[cartItems]);
    return quantity;

}
export default useQuantity;