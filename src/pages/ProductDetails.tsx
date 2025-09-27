import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import { USD_TO_ETB } from "../redux/constants";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-600">
        <p>Product not found.</p>
        <Link to="/shop" className="mt-4 text-blue-600 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="w-full h-80 bg-gray-100 rounded overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            {product.subCategory && (
              <p className="text-gray-500 mb-2">{product.subCategory}</p>
            )}
            <p className="text-green-700 text-lg font-semibold mb-4">
              ${product.price} / {(product.price * USD_TO_ETB).toFixed(0)} ETB
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded w-full transition-all ${
              added ? "bg-green-600 text-white scale-105" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/shop" className="text-blue-600 hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;