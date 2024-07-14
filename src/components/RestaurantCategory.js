import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
// console.log(props)
const [showItem,setShowItem]= useState(false)
  const { data } = props;
  const { itemCards } = data;
  const handleCLick=()=>{
    showItem === false?
    setShowItem(true) : setShowItem(false)
  }
  return (
    <div>
      <div  className="w-8/12 mx-auto my-4 text-gray-800 text-lg  border-b border-gray-400 p-4  ">
        <div className="flex justify-between cursor-pointer" onClick={handleCLick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>˅</span>
        </div>

        {showItem && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
