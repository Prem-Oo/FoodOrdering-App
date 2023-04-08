import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";
import Loading from "./Loading";
const RestaurentMenu = () => {
    const { resID } = useParams();
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5061743&lng=80.6480153&restaurantId=" + resID);
                const json = await data.json();
                console.log(json);
                setMenu(json);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (!menu) ? <Loading /> : (<>
        <div className="card"> <img src={IMG_URL + menu.data.cards[0].card.card.info.cloudinaryImageId} alt="rest-img" /></div>
        <h2>{menu.data.cards[0].card.card.info.name}</h2>
        <h2></h2>
    </>)
}

export default RestaurentMenu;