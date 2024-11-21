/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return <>
        <footer className="bg-gray-900 text-white p-5">
            <br />
            <hr className="border-t border-gray-700 my-2" />
            <div className="flex justify-between">
                <img className="w-24 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz176OehRaL9Kd0mP_KRjkKOTOPJn3JID3xjHZbVnVEhG1zWc_pBqLQosroJJwuifo_4&usqp=CAU" alt="logo" />
                <p>© 2024 Foodify App</p>
                <ul className="flex space-x-2">
                    <li><a href="#"><img className="w-16" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="fb" /></a></li>
                    <li><a href="https://www.linkedin.com/in/prem-oo/"><img className="w-16 " src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedn" /></a></li>
                    <li><a href="https://www.linkedin.com/in/prem-oo/"><img className="w-16 " src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="ig" /></a></li>
                </ul>
            </div>
        </footer>
    </>
}
export default Footer;