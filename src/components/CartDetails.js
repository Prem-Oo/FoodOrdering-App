import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem,removeItem,clearCart } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartDetails = ({ cartItems }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate=useNavigate();
     
//    console.log("CartDetails rendered...")
//    console.log(cartItems);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            setTotalPrice(total);
        };
        console.log("CartDetails useEffect rendered...")
        calculateTotalPrice();
    }, [cartItems]);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem({ id: item.id }));
    };

    const handleOrder=()=>{
         setShowPopup(true);
         setTimeout(()=>{setShowPopup(false)
            dispatch(clearCart());
            navigate('/');
         },2000);
        
    }

    return (
        <>
             {showPopup && <div className="fixed bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-bounce">
                Order successful 
            </div>}
            <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Cart Details</h2>
            <ul className="divide-y divide-gray-200">
                {cartItems?.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center py-2"
                    >
                        <div>
                            <p className="font-semibold text-gray-700">{item.description}</p>
                            <p className="text-gray-500">Rs {item.price / 100}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleRemoveItem(item)}
                                className="p-1 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition"
                            >
                                -
                            </button>
                            <button
                                onClick={() => handleAddItem(item)}
                                className="p-1 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition"
                            >
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='flex justify-between items-center mt-6'>
                <h2 className={'text-xl font-bold'}>Total Price: Rs {totalPrice / 100}</h2>
                <button className="p-2 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition"
                        onClick={handleOrder}
                >
                      Order Now
                </button>
            </div>
           
        </div>
        </>
    );
};

export default CartDetails;


