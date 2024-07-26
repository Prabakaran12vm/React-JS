import { useEffect, useState } from "react";
import { FOOD_API } from "./constants";
const useRestaurantData = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState(listOfRes);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();
    setListofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("This is PBK");
  };
  return [listOfRes, filteredRes];
};
export default useRestaurantData;
