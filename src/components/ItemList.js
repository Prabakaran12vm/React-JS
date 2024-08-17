import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from '../utils/cartSlice'

const ItemList = ({ items }) => {
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info
  const dispatch = useDispatch();


  const handleAdd = (item)=>(
    // dispatch an action
    dispatch(addItem(item))
  )
  // const {dummy } = item.card.info.name
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          //   {...console.log(item.card.info.id)}
          className=" p-2 m-2  text-left  border-gray-400 border-b-2 flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <span className="font-bold  fa-solid fa-star text-slate-700">
                {item.card.info.name}
              </span>
              <span className="my-0 px-0   font-bold font-medium   text-slate-700 flex">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <span className="font-sans font-light">
                ⭐{item.card.info.ratings.aggregatedRating.rating}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-4/12 p-4">
            <div className="absolute ml-12 mt-28 ">
              <button onClick={()=>handleAdd(item)} className="p-2 font-bold w-28 text-green-600 bg-white rounded-lg shadow-lg m-auto">
              ADD
              </button>
            </div>
            <img
              //   className="w-auto max-w-[156px] cursor:pointer  h-auto max-h-[144px] py-0  rounded-2xl text-right px-2 "
              className=" w-full max-w-[250px] rounded-2xl  max-h-[144px]"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
