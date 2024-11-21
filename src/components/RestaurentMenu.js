import { useParams } from "react-router-dom";
import Loading from "./Loading";
import useRestraunt from "../utils/useRestaurent";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurentMenu = () => {
    // reading url from useParams
    const { resID } = useParams();
    // console.log("Res-Menu");
    // console.log(resID);
    // custom hook to reduce code and modularity
    const menu = useRestraunt(resID);// fetches total restraunt menu.
    
    const restaurentData = menu?.data?.cards[2]?.card?.card?.info;//restraunt info.
    const { avgRating, name, costForTwoMessage, cuisines, totalRatingsString, sla } = restaurentData || {}
    //const menuList = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;// accordian items.
    const categories = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")// filtering items only of @type ItemCategory
   
    // lifting the state up. controlling categories(child) state from parent component.
    const [expanded, setExpanded] = useState(null);

    const collapse = (index) => {
        if (expanded === index) {
            setExpanded(null); // Collapse if already expanded
        } else {
            setExpanded(index); // Expand if not expanded
        }
    }
    

    return (!menu) ? <Loading /> : (<>
        <div className="mt-2  mx-32 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-b-2xl shadow-xl">
            {/* <img src={IMG_URL + cloudinaryImageId} alt="rest-img" /> */}

            <div className="flex justify-between items-center mb-2 mx-10">
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
            <div className="border-dashed border-y-2  mx-10 my-6 py-8 flex justify-between text-lg">
                <span className="text-gray-700 text-sm">{sla.deliveryTime}min</span>
                <span className="text-gray-700 text-sm">{costForTwoMessage}</span>
            </div>
        </div>
        {categories.map((category,index) =>
         <RestaurentCategory key={category?.card?.card?.title}
                             data={category?.card?.card}
                             expanded={index===expanded ?true :false}
                             setExpanded={(i)=>collapse(i)}
                             index={index}
          
          />)}

    </>)
}

export default RestaurentMenu;