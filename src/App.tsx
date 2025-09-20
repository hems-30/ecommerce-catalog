import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/productsSlice';
import { fetchProducts } from './api/productsApi';
import { RootState, AppDispatch } from './redux/store';

// Simple Header Component
const Header = () => (
  <header className="bg-blue-600 text-white py-4 shadow">
    <h1 className="text-center text-3xl font-bold">E-Commerce Catalog</h1>
  </header>
);

// Simple Navbar Component
const Navbar = () => (
  <nav className="bg-gray-100 py-2 shadow">
    <ul className="flex justify-center space-x-4">
      <li className="font-semibold hover:text-blue-600 cursor-pointer">Home</li>
      <li className="font-semibold hover:text-blue-600 cursor-pointer">Products</li>
      <li className="font-semibold hover:text-blue-600 cursor-pointer">About</li>
      <li className="font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
    </ul>
  </nav>
);

// Simple Footer Component
const Footer = () => (
  <footer className="bg-gray-200 py-4 mt-10 text-center">
    <p className="text-gray-700">© 2025 E-Commerce Catalog. All rights reserved.</p>
  </footer>
);

function App() {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      dispatch(setProducts(data));
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Navbar />

      <main className="p-4">
        {products.length === 0 ? (
          <p className="text-center text-lg mt-10">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between p-4"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain mb-4"
                  />
                  <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                  <p className="text-blue-600 font-semibold">${product.price}</p>
                </div>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => alert(`${product.title} added to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;