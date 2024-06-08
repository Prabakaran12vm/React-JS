import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockdata";
const Body = ()=>{
    const [list0fRes, setlist0fRes] = useState(resList) 
    useEffect(()=>{

        fetchData()
    },[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.7464655&lng=79.986519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );  
        const json = await data.json()
        console.log(json)
        setlist0fRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    }

    return (
    <div className="body">
        <div className="filter">

            <button className="filter-btn" onClick={()=>{
                const filteredres  = list0fRes.filter((res) => res.info.avgRating > 3.9);
                setlist0fRes(filteredres);
                // if (filteredres.length = 0 ){
                //     console.log("No Restaurants Found")
                // };
                

                
                
                
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