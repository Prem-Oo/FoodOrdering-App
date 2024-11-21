import React from 'react'
import { IMG_URL } from './config';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const ItemList = ({ items }) => {

    const [showPopup, setShowPopup] = useState(false);

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    // console.log(items);
    const handleAddItem = (cardItem) => {
        // Dispatch an action
        dispatch(addItem(cardItem));
        setShowPopup(true); 
        setTimeout(() => { setShowPopup(false); }, 3000);
    };

    return (
        <div>
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className='font-bold text-lime-600'>{item.card.info.name}</span>
                            <span className='font-semibold'>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button
                                className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg hover:bg-slate-800"
                                onClick={() => handleAddItem(item?.card?.info)}
                            >
                                Add +
                            </button>
                        </div>
                        <img src={IMG_URL + item.card.info.imageId} alt='restro' className="w-24 h-24 rounded-md" />
                        {showPopup &&
                         ( <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-bounce">
                             Added to Cart {cartItems.length} </div> )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList