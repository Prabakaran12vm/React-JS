import { CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; // Destructuring
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return (
    <motion.div 
    whileHover={{
      scale: 0.98,
      transition: { duration: 0.1 },
    }}
    whileTap={{ scale:1 }}
    >
      {/* hover:scale-[0.99] */}
    <div className="p-4 w-[250px] h-[350px]  border-b-2 font-sans rounded-md ">
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
    </motion.div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
