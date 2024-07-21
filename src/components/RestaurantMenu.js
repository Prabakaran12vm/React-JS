import Shimmer from "./shimmerUI";
import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } = resInfo?.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // if itemCards == null
  if (!itemCards) {
    return (
      <div>
        <h1 className="text-center text-gray-700 font-sans  hover:text-orange-600 mt-24 ">
          LET EM COOK !!
        </h1>
      </div>
    );
  }
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
  // Brooklyn Creamery API BUG
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards

  return (
    // accordian
    <div className="text-center ">
      <div>{/* <img> */}</div>
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>
      <h2>⭐{avgRating}</h2>
      {categories.map((c, index) => (
        // controlled component
        <RestaurantCategory
          showItem={index === showIndex ? true : false}
          key={c.card.card.title}
          data={c.card?.card}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {" - ₹"}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
