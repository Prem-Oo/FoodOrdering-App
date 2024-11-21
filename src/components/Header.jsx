import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useQuantity from "../utils/useQuantity";
const Header = () => {
    const [title, setTitle] = useState('Foodify');

    const cartItems = useSelector((store) => store.cart.items);
    
    const quantity=useQuantity(cartItems);

    const isOnline = useOnline();
    return (<>
        <header className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <Link to={'/'}>
                <img
                    className="w-1/2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz176OehRaL9Kd0mP_KRjkKOTOPJn3JID3xjHZbVnVEhG1zWc_pBqLQosroJJwuifo_4&usqp=CAU"
                    alt="food"
                />
            </Link>
            <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => setTitle("Prem's Foodify App")}
            >
                {title} {isOnline ? '🟢' : '🔴'}
            </h2>

            <nav>
                <ul className="flex space-x-6 text-xl m-6">
                    <Link className="transition hover:text-yellow-300" to={'/'}>HOME</Link>
                    <Link className="transition hover:text-yellow-300" to={'/about'}>ABOUT</Link>
                    <Link className="transition hover:text-yellow-300" to={'/contact'}>CONTACT</Link>
                    <Link className="transition hover:text-yellow-300" to={'/cart'}><ShoppingCartIcon />{quantity}</Link>
                </ul>
            </nav>
        </header>
    </>)
}
export default Header;