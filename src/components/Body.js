import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./shimmerUI";
import { FOOD_API } from "../utils/constants";
import { Link } from "react-router-dom";
// whenver there is a change in state variable react will rerender the state variable

const Body = () => {
  const [list0fRes, setlist0fRes] = useState([]);
  // console.log(typeof(list0fRes))
  const [filteredRes, setFilteredRes] = useState(list0fRes);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      FOOD_API
       );
    const json = await data.json();
    // console.log(json)
    // optional chaining
    setlist0fRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    console.log(list0fRes)
  };

  return list0fRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              // setSearchText(e.target.value);
              // searchText = e.target.value
              setSearchText(e.target.value)

              const filteredRes = list0fRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRes(filteredRes);
            }}
            className="search-box"
          />
          <button onClick={() => {setFilteredRes(filteredRes);}}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const topRes = list0fRes.filter((res) => res.info.avgRating > 4);
            setFilteredRes(topRes);

          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="res-container">
        
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}>
          <RestaurantCard 
          
           resData={restaurant} />
          </Link>
        ))}{
          console.log(filteredRes[1].info.id)
        }
      </div>
    </div>
  );
};
export default Body;
