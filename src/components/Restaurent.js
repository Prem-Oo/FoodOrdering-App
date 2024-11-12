
import { IMG_URL } from './config';
const Restaurent = (props) => {

    const { name, cloudinaryImageId, avgRating, sla, costForTwo, cuisines } = props.resData.info;
    // console.log("restaurent props")
    // console.log(props.resData.info)
    return (<>

        <div className="w-64 h-85 p-4 border justify-between shadow-md m-8 transition  hover:scale-105 hover:shadow-lg ">
            <img className='rounded-sm w-full h-40 object-cover' src={IMG_URL + cloudinaryImageId} alt="food-image" />
            <p className='text-sm font-semibold my-2'>{name}</p>
            <p className='text-gray-600 text-xs my-2'>{cuisines.join(', ')}</p>
            <div className="flex items-center justify-between mt-2">
                <p id="star" className="text-yellow-500 text-xl pr-1">&#9734;</p>
                <p className="text-gray-700 text-sm">{avgRating} stars</p>
                <span className="text-gray-700 text-sm">{sla.deliveryTime} min</span>
                <span className="text-gray-700 text-sm">{costForTwo}</span>
            </div>
        </div>

    </>)
}
export default Restaurent;