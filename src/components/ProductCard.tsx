import React, { useState } from "react";
import { Product } from "../redux/productsSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { USD_TO_ETB } from "../redux/constants";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="border rounded shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      <Link
        to={`/product/${product.id}`}
        className="w-full h-36 sm:h-40 md:h-48 lg:h-52 overflow-hidden block"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-sm sm:text-base line-clamp-2 hover:text-blue-600 transition-colors duration-200">
              {product.title}
            </h3>
          </Link>
          {product.subCategory && (
            <p className="text-gray-500 text-xs sm:text-sm">{product.subCategory}</p>
          )}
          <p className="text-green-700 font-bold mt-1">
            ${product.price} / {(product.price * USD_TO_ETB).toFixed(0)} ETB
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-2 px-4 py-2 rounded transition-all w-full ${
            added
              ? "bg-green-600 text-white scale-105"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          aria-label={`Add ${product.title} to cart`}
        >
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;