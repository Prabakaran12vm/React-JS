import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./shimmerUI";
const Body = ()=>{
    const [list0fRes, setlist0fRes] = useState([]) 
    useEffect(()=>{

        fetchData()
    },[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.7464655&lng=79.986519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );  
        const json = await data.json()
        console.log(json)
        // optional chaining
        setlist0fRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    }
    if (list0fRes.length === 0){
        return (<Shimmer/>);
    }

    return (
    <div className="body">
        <div className="filter">

            <button className="filter-btn" onClick={()=>{
                const filteredres  = list0fRes.filter((res) => res.info.avgRating > 4);
                setlist0fRes(filteredres);
            }}>
                Top Restaurants
            </button>
        </div>

        <div className="res-container">
            {
                list0fRes.map((restaurant) =>( <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />))
            }            
           
        </div>

    </div>
)
}


export default Body;