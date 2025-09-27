import React from 'react';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';

const Shop: React.FC = () => {
  return (
    <main className="mt-8 container mx-auto px-4">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Shop All Products</h2>
        <p className="text-center text-gray-600 mb-8">
          Browse through our wide collection of products.
        </p>

        {/* Filter Bar */}
        <FilterBar />

        {/* Product List */}
        <ProductList />
      </section>
    </main>
  );
};

export default Shop;