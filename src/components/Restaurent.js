import '../'
import { IMG_URL } from './config';
const Restaurent = (props) => {

    const { name, cloudinaryImageId, avgRating, deliveryTime, costForTwo, cuisines } = props.resData.data;
    return (<>

        <div className="card">
            <img src={IMG_URL + cloudinaryImageId} alt="food-image" />
            <h4>{name}</h4>
            <p id='cusines'>{cuisines.join(',')}</p>
            <p className='metadata'> <li id='star'>&#9734; {avgRating} stars</li>
                <li>{deliveryTime} min  </li>
                <li> &#8377; {costForTwo / 100} for two</li></p>
        </div>

    </>)
}
export default Restaurent;