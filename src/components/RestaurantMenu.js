import { useEffect, useState } from "react";
import Shimmer from "./shimmerUI";
import {useParams} from 'react-router-dom';
import { MENU_ID } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resid} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_ID + resid
    );
    const json = await data.json();

    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
    
  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="res_menu">
      <div>{/* <img> */}</div>
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{avgRating}</h2>
      <ul>
              
        {itemCards.map((item) => (
          
          <li key={item.card.info.id}>
            {item.card.info.name}{" - ₹"}{item.card.info.price/100}
           </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
