import Shimmer from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resid} = useParams();
  const resInfo = useRestaurantMenu(resid);
  console.log(resid)
  if (resInfo === null) {
    return <Shimmer />;
  }
  
  // data.cards[2].card.card.info.name
  const { name, cuisines, avgRating } = resInfo?.cards[2].card.card.info
  // cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card?.card?.itemCards[9].card.info.name
  
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
  // Brooklyn Creamery API BUG
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards

  return (
    <div className="res_menu">
      <div>{/* <img> */}</div>
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{avgRating}</h2>
      
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {" - ₹"}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
