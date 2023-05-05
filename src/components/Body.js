import Searchbar from "./Searchbar";
import { resList } from "./config";
import Restaurent from "./Restaurent";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
    const [isloading, setIsloadig] = useState(false);
    const [restaurent, setRestaurent] = useState(resList);// original
    const [resFiltered, setResFiltered] = useState(resList);// filtered
    // restaurent is a filtered data, initially set to resList.
    // setRestaurent is passed as prop to child ( to access data inside body(parent) or { passing data from child to parent :)... })

    useEffect(() => {
        const getAPI = async () => {
            try {
                setIsloadig(true)
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING");
                const jsonData = await response.json();
                // console.log(jsonData);
                // console.log(jsonData.data.cards[2].data.data.cards);
                setRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
                setResFiltered(jsonData?.data?.cards[2]?.data?.data?.cards)
                setIsloadig(false)
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
    return <>
        <Searchbar resData={restaurent} setResFiltered={setResFiltered} />
        {isloading ? <Loading /> : <div className="container">
            {resFiltered.map((resObj) => <Link key={resObj.data.id} to={"/restaurents/" + resObj.data.id}><Restaurent resData={resObj} /></Link>)}
        </div>}
    </>
}
export default Body;