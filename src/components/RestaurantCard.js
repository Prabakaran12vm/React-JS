import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; // Destructuring
  return (
    <div className="m-4 p-4 w-[200px] shadow-lg font-sans " >
      <img
        className="rounded-lg w-[200px] h-[150px]"
        alt="reslogo"
        src={CDN_URL + cloudinaryImageId}
      />
      
      <h3 className="font-bold text-gray-700">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="">{avgRating}Stars</h4>
      <h4 className="text-gray-600">{costForTwo}For Two</h4>
      
    </div>
  );
};

export default RestaurantCard;
