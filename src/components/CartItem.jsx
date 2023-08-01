import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import Qty from "./Qty";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item, color, size }) => {
  // console.log(color)
  // console.log(size)
  const { removeFromCart } = useContext(CartContext);
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const img = item.attributes.image.data[0].attributes.url;

  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[120px] h-[120px]">
        <img src={`${imageUrl}${img}`} alt="" />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 ">
          <Link to={`/product/${item.id}`}>{item.attributes.name}</Link>
          <div
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
            onClick={() => removeFromCart(item.id)}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12 ">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            $ {item.attributes.Price * item.amount}
          </div>
        </div>
        <div>
          <span className="text-accent text-xl">
            $ {item.attributes.Price} per pair
          </span>
        </div>
        <div>
          <div className="flex gap-x-4 items-center mt-4">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
            |<div>{size}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
