import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./shimmerUI";
import { FOOD_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// whenver there is a change in state variable react will rerender the state variable

const Body = () => {
  const [list0fRes, setlist0fRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState(list0fRes);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();
    // console.log(json)
    // optional chaining
    setlist0fRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setFilteredRes(list0fRes)
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like offline!</h1>;
  }

  return list0fRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              const filteredRes = list0fRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRes(filteredRes);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-gray-200 shadow-lg"
            onClick={() => {
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const topRes = list0fRes.filter((res) => res.info.avgRating > 4);
              setFilteredRes(topRes);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      <div className="ml-[50px] flex flex-wrap shadow-sm">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {}
      </div>
    </div>
  );
};
export default Body;
