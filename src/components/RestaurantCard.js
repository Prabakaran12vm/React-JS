import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info // Destructuring
    return (
    <div className="res-card" style={{backgroundColor: "rgb(63, 63, 63)"}}>
        
        <img className="res-logo" alt="reslogo" 
        src={ CDN_URL
        + cloudinaryImageId} />
        {/* <h3>WHY ME</h3> */}
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{props.cousine}</h4>
        <h4>{props.rating}</h4> */}

    </div>
)
}

export default RestaurantCard;