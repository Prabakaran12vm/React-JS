import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./shimmerUI";
// whenver there is a change in state variable react will rerender the state variable

const Body = () => {
  const [list0fRes, setlist0fRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState(list0fRes);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.7464655&lng=79.986519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            onClick={() => {
              const filteredRes = list0fRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
