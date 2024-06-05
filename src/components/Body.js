import { useState } from "react";
import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockdata";
const Body = ()=>{
    const [list0fRes, setlist0fRes] = useState(resList) 
    
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