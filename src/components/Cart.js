import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { Link } from "react-router-dom";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    if (cartItems.length === 0) return (
        <div className="flex flex-col items-center justify-center">
            <Link to={'/'}>
                <button className="bg-slate-800 text-white p-3 rounded-md hover:bg-slate-900 mt-4">
                    Back to Home
                </button>
            </Link>
            <p className="mt-4 text-gray-500 text-center">Looks like you have not added anything to your cart. Go ahead and explore the restaurants. </p>

            <img className="w-1/2" src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="empty-cart" />
        </div>
    );
    return <>
        <div className="flex flex-col items-center justify-center h-screen">
            <button className="bg-slate-800 text-white p-3 rounded-md hover:bg-slate-900" onClick={() => dispatch(clearCart())}>
                Empty Cart
            </button>
            <ItemList items={cartItems} />
        </div>
    </>
}
export default Cart;
