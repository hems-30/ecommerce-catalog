import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addToCart, decreaseQuantity, removeFromCart, CartItem } from '../redux/cartSlice';
import { USD_TO_ETB } from '../redux/constants';

const CartItemRow: React.FC<{ item: CartItem }> = memo(({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 rounded shadow gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-20 h-20 overflow-hidden rounded flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold truncate max-w-xs">{item.title}</h3>
          <p className="text-gray-600">
            ${item.price} / {(item.price * USD_TO_ETB).toFixed(0)} ETB × {item.quantity}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:flex-nowrap">
        <button
          onClick={() => dispatch(addToCart(item))}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          -
        </button>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
});

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map(item => (
              <CartItemRow key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 text-right flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)} / {(totalPrice * USD_TO_ETB).toFixed(0)} ETB
            </p>
            <button
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition w-full sm:w-auto"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;