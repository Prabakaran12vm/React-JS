import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItem,setShowIndex}) => {
  // console.log(props)

  const { itemCards } = data;
  // const [showItem,setShowItem] = useState(showItem);

  const handleCLick=()=>{
    // showItem === false?
    // setShowItem(true) : setShowItem(false)
    setShowIndex();
  }
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 text-gray-800 text-lg  border-b border-gray-400 p-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleCLick}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>˅</span>
        </div >
        
        {showItem && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
