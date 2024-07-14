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
    // console.log(json.data.cards[4].card.card.info[0].stackedDetails.favRestaurantInfoCard.restaurants)
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[6].info.differentiatedUi)
    // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  };
  const onlineStatus = useOnlineStatus();
  if (list0fRes == null) {
    return (
      <div>
        <h1 className="text-center">Empty</h1>
      </div>
    );
  }
  if (onlineStatus === false) {
    return <h1>Looks like offline!</h1>;
  }

  return list0fRes === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search ml-[30%] p-4 ">
          <input
            type="text"
            className="border rounded-lg border-solid focus:ring-blue-500 focus:border-blue-500  border-gray-700"
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
            className="px-4 py-2 m-4 bg-gray-200   rounded-md hover:text-orange-500 text-gray-600 font-semibold"
            onClick={() => {
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md hover:text-orange-500 text-gray-600 font-semibold"
            onClick={() => {
              const topRes = list0fRes.filter((res) => res.info.avgRating > 4);
              setFilteredRes(topRes);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      <div className="ml-[50px] flex flex-wrap ">
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
