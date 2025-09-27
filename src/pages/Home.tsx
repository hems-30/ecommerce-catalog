import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // reuse existing component


const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const featured = products.slice(0, 4);

  return (
    <div className="mt-8 px-4 md:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800 rounded-2xl p-10 text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to EthioMart</h2>
        <p className="mb-6 text-lg md:text-xl">
          Discover premium products at unbeatable prices
        </p>
        <Link
          to="/shop"
          className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          aria-label="Shop Now"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;