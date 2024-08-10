import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart
  
 } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleEmpty = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2  bg-slate-500 hover:bg-orange-600 text-white font-bold rounded-xl"
          onClick={handleEmpty}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
