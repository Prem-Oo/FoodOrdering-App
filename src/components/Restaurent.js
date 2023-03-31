import '../'
const Restaurent = (props) => {

    const { name, cloudinaryImageId, avgRating, deliveryTime, costForTwo, cuisines } = props.resData.data;
    return (<>

        <div className="card">
            <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} alt="food-image" />
            <h4>{name}</h4>
            <p id='cusines'>{cuisines.join(',')}</p>
            <p className='metadata'> <li id='star'>&#9734; {avgRating} stars</li>
                <li>{deliveryTime} min  </li>
                <li> &#8377; {costForTwo / 100} for two</li></p>
        </div>

    </>)
}
export default Restaurent;