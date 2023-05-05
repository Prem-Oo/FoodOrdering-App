import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
    const [title, setTitle] = useState('FoodApp');
    //console.log('Header rendered')
    const isOnline = useOnline();
    return (<>
        <header className="header">
            <div ><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz176OehRaL9Kd0mP_KRjkKOTOPJn3JID3xjHZbVnVEhG1zWc_pBqLQosroJJwuifo_4&usqp=CAU" alt="food" /></div>
            <h2 onClick={() => setTitle('New FoodApp')}>{title} {isOnline ? '🟢' : '🔴'}</h2>
            <nav>
                <ul>
                    <Link to={'/'}>HOME</Link>
                    <Link to={'/about'}>ABOUT</Link>
                    <Link to={'/contact'}>CONTACT</Link>
                    <Link to={'/cart'}>CART</Link>
                </ul>
            </nav>
        </header>
    </>)
}
export default Header;