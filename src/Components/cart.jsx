import React, { useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../Store/slices/cartSlice";
function Cart() {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  // disable the body-scroll when the Cart is open
  useEffect(() => {
    const docBody = document.body;

    isCartOpen
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isCartOpen]);
  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>
      {isCartOpen && (
        <div className=" fixed inset-0  bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full shadow-lg p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-2xl font-semibold">
                Cart <small>({cartQuantity})</small>
              </h2>
              <div
                title="Close"
                className="cursor-pointer"
                onClick={() => handleCloseCart(false)}
              >
                <span className="text-2xl">
                  <FiDelete />
                </span>
              </div>
            </div>
            <div className="overflow-y-auto max-h-80 mb-4">
              {cartQuantity === 0 ? (
                <h2 className="text-center">Cart is empty</h2>
              ) : (
                cartItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                    <div
                      className="grid grid-cols-4 gap-4 items-center mb-4"
                      key={id}
                    >
                      <figure className="col-span-1">
                        <img src={img} alt="product-img" className="w-full" />
                      </figure>
                      <div className="col-span-2">
                        <h4>{title}</h4>
                        <h3 className="font-semibold mt-2">
                          Rs {itemTotal.toLocaleString()}
                        </h3>
                      </div>
                      <div className="col-span-1 flex flex-col items-center">
                        <span
                          className="cursor-pointer bg-gray-200 p-1"
                          onClick={() => handleDecrement(id)}
                        >
                          &#8722;
                        </span>
                        <b>{quantity}</b>
                        <span
                          className="cursor-pointer bg-gray-200 p-1"
                          onClick={() => handleIncrement(id)}
                        >
                          &#43;
                        </span>
                      </div>
                      <div
                        title="Remove Item"
                        className="cursor-pointer text-2xl"
                        onClick={() => handleRemove(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="border-t pt-2 flex justify-between items-center">
              <h3 className="text-xl">
                <small>Total:</small>
                <b className="ml-2">₹ {cartTotal.toLocaleString()}</b>
              </h3>
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 text-black"
                disabled={cartQuantity === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
