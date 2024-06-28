import { useState } from "react";
import { MENU_ID } from "./constants";
import { useEffect } from "react";
const useRestaurantMenu = (resId) => {
  // fetch data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_ID + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
