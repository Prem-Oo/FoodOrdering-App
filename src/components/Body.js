import Searchbar from "./Searchbar";
import { newResList } from "./newConfig";
import Restaurent from "./Restaurent";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
    const [isloading, setIsloadig] = useState(false);
    const [restaurent, setRestaurent] = useState(newResList);// original
    const [resFiltered, setResFiltered] = useState(newResList);// filtered
    // restaurent is a filtered data, initially set to resList.
    // setRestaurent is passed as prop to child ( to access data inside body(parent) or { passing data from child to parent :)... })

    useEffect(() => {
        const getAPI = async () => {
            try {
                setIsloadig(true)
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5242903&lng=80.6169565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const jsonData = await response.json();
                const cards4Restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const cards5Restaurants = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                const restaurants = cards4Restaurants || cards5Restaurants;

                setRestaurent(restaurants);
                setResFiltered(restaurants);
                setIsloadig(false)
                console.log(resFiltered)
            } catch (error) {
                console.log(error);
            }
        }
        getAPI();
    }, [])
    const online = useOnline();
    if (!online) {
        return <h1> plz check your connection!! you are offline</h1>
    }
    console.log(resFiltered)
    if (isloading) return <Loading />
    return <>
        <Searchbar resData={restaurent} setResFiltered={setResFiltered} />
        <div className="flex flex-wrap p-2 mx-auto justify-around">
            {resFiltered?.map((resObj) => <Link key={resObj.info.id} to={"/restaurents/" + resObj.info.id}><Restaurent resData={resObj} /></Link>)}
        </div>
    </>
}
export default Body;