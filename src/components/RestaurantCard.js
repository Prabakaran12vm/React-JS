import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; // Destructuring
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

   
    return (
    <div className="m-4 p-4 w-[200px] h-[350px]  shadow-xl font-sans rounded-md    hover:scale-[0.99]">
      <img
        className="rounded-lg w-[220px] h-[138.5px] "
        alt="reslogo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-gray-700 ">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-600">{avgRating}Stars</h4>
      <h4 className="text-gray-600">{costForTwo}For Two</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard/>
      </div>
    );
  };
};

export default RestaurantCard;
