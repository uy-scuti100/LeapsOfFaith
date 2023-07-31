import { useContext } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
// stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";
const Cart = () => {
  const { toggleNav, cart, total, clearCat } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51NZUKiAQxqM0g95BjY7XF6j5ZnpNQLyZa2ugDbfbVGcNPCCPxK8av9VWQ5Gf6JSDQvN4iKiU9dU0sHtubY59kbLU00HoJBAvYn"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", { cart });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full px-4 text-primary">
      <div className="overflow-y-auto overflow-x-hidden h-[65vh]">
        <div className="flex justify-between items-center h-[98px]">
          <div className="text-xl uppercase">Basket</div>
          <div className="text-4xl w-20 cursor-pointer" onClick={toggleNav}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col gap-y-10 px-2 h-full bg-white">
          {cart.length >= 1 ? (
            <div>
              {cart.map((item) => {
                // Check if the 'item' is not undefined and has the 'id' property
                if (item) {
                  return <CartItem item={item} key={item.id} />;
                } else {
                  return null;
                }
              })}{" "}
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-y-5 items-center h-full w-full">
              <p>YOUR BASKET IS EMPTY 😏🙄😎</p>
              <div>
                <IoCartOutline size={25} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* subtotal and total  */}
      {cart.length >= 1 && (
        <div className="px-5 py-10 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {total}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
        </div>
      )}
      <div className="px-6">
        {cart.length >= 1 && (
          <div className="flex justify-between gap-x-6">
            <button
              onClick={clearCat}
              className="btn border border-primary text-accent hover:bg-accent-hover hover:text-white transition-all duration-300"
            >
              Clear cart
            </button>
            <button
              onClick={handlePayment}
              className="btn bg-green-600 hover:bg-green-900 text-white flex-1 px-2 gap-x-2 transition-all duration-300"
            >
              Checkout
              <IoArrowForward size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
