import { useState } from "react";

const Header = () => {
    const [title, setTitle] = useState('FoodApp');
    //console.log('Header rendered')
    return (<>
        <header className="header">
            <div ><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz176OehRaL9Kd0mP_KRjkKOTOPJn3JID3xjHZbVnVEhG1zWc_pBqLQosroJJwuifo_4&usqp=CAU" alt="food" /></div>
            <h2 onClick={() => setTitle('New FoodApp')}>{title}</h2>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CART</li>
                </ul>
            </nav>
        </header>
    </>)
}
export default Header;