import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // toggle nav
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  // clear cat
  const clearCat = () => {
    setCart([]);
  };

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.Price * c.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  /// add to cart
  const addToCart = (item, id, color, size) => {
    const itemId = parseInt(id);
    const newItem = {
      ...item[0],
      amount: 1,
      selectedSize: size,
      selectedColor: color,
    };
    const existingCartItem = cart.find(
      (cartItem) =>
        cartItem.id === itemId &&
        cartItem.color === color &&
        cartItem.size === size
    );

    if (existingCartItem) {
      // If the same item with the same color and size is already in the cart, increase the amount
      const newCart = cart.map((item) => {
        if (item.id === itemId && item.color === color && item.size === size) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If the item with the selected color and size is not in the cart, add it as a new item
      const newItem = { ...item[0], amount: 1, color, size };
      setCart([...cart, newItem]);
    }

    setIsOpen(true);
  };

  // remove item from cart

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // handle input
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    // console.log(value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };

  // handle select

  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleNav,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCat,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
