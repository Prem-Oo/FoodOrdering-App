import { useSelector } from "react-redux/es/hooks/useSelector";
import CartDetails from "./CartDetails";
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { Link } from "react-router-dom";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    // console.log("Cart rendered...")
    // console.log(cartItems);

    if (cartItems.length === 0) return (
        <div className="flex flex-col items-center justify-center">
            <Link to={'/'}>
                <button className="bg-slate-800 text-white p-3 rounded-md hover:bg-slate-900 mt-4">
                    Back to Home
                </button>
            </Link>
            <p className="mt-4 text-gray-500 text-center">Looks like you have not added anything to your cart. Go ahead and explore the restaurants. </p>

            <img className="w-1/2" src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="empty-cart" />
        </div>
    );
    return <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <button
                className="mb-6 bg-slate-800 text-white p-3 rounded-md hover:bg-slate-900 transition"
                onClick={() => dispatch(clearCart())}
            >
                Empty Cart
            </button>
            <CartDetails cartItems={cartItems} />
        </div>
    </>
    
}
export default Cart;
