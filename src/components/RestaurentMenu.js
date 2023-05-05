import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";
import Loading from "./Loading";
import useRestraunt from "../utils/useRestaurent";
const RestaurentMenu = () => {
    // reading url from useParams
    const { resID } = useParams();
    // custom hook to reduce code and modularity
    const menu = useRestraunt(resID);

    return (!menu) ? <Loading /> : (<>
        <div className="card"> <img src={IMG_URL + menu.data.cards[0].card.card.info.cloudinaryImageId} alt="rest-img" /></div>
        <h2>{menu.data.cards[0].card.card.info.name}</h2>
        <h2></h2>
    </>)
}

export default RestaurentMenu;