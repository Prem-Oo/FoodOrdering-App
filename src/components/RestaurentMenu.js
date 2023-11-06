import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";
import Loading from "./Loading";
import useRestraunt from "../utils/useRestaurent";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
    // reading url from useParams
    const { resID } = useParams();
    // custom hook to reduce code and modularity
    const menu = useRestraunt(resID);// fetches total restraunt menu.

    const restaurentData = menu?.data?.cards[0]?.card?.card?.info;//restraunt info.
    // console.log(restaurentData)
    const { avgRating, cloudinaryImageId, name, costForTwoMessage, cuisines, totalRatingsString, sla } = restaurentData || {}
    const menuList = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;// accordian items.
    const categories = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")// filtering items only of @type ItemCategory
    // console.log(categories)


    return (!menu) ? <Loading /> : (<>
        <div className="mt-2  mx-32">
            {/* <img src={IMG_URL + cloudinaryImageId} alt="rest-img" /> */}

            <div className="flex justify-between items-center mb-2">
                <div>
                    <p className="mb-3 text-4xl font-bold drop-shadow-lg">{name}</p>
                    <p className="text-lg text-gray-400 mb-3">{cuisines.join(', ')}</p>
                </div>
                <div className="border p-3 text-center rounded-2xl">
                    <p className="border-b-2 text-lg pb-1">
                        &#9734;  {avgRating}
                    </p>
                    <p className="pt-2 text-gray-400">{totalRatingsString}</p>
                </div>
            </div>
            <div className="border-dashed border-y-2 my-6 py-8 flex justify-between text-lg">
                <span className="text-gray-700 text-sm">{sla.deliveryTime}min</span>
                <span className="text-gray-700 text-sm">{costForTwoMessage}</span>
            </div>
        </div>
        {categories.map((category) => <RestaurentCategory key={category?.card?.card?.title} data={category?.card?.card} />)}

    </>)
}

export default RestaurentMenu;