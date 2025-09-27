import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Calculate total price
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          EthioMart
        </Link>

        {/* Nav Links */}
        <nav className="space-x-6 flex items-center relative">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Contact
          </Link>

          {/* Cart */}
          <div className="ml-4 relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-300 transition-colors relative focus:outline-none"
              aria-label="Cart"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 border rounded-lg shadow-lg z-20 p-4 max-h-96 overflow-y-auto">
                {cartItems.length > 0 ? (
                  <>
                    <ul className="divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between py-2"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-14 h-14 object-cover rounded mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                              {item.title}
                            </h4>
                            <p className="text-green-700 font-bold text-sm">
                              ${item.price} × {item.quantity}
                            </p>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-red-600 hover:text-red-800 text-lg font-bold ml-2"
                            aria-label={`Remove ${item.title}`}
                          >
                            &times;
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Total & Cart Link */}
                    <div className="mt-3 flex justify-between items-center">
                      <span className="font-semibold">
                        Total: ${totalPrice}
                      </span>
                      <Link
                        to="/cart"
                        onClick={() => setDropdownOpen(false)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                      >
                        Go to Cart
                      </Link>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    Cart is empty.
                  </p>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;