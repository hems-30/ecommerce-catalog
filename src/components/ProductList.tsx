import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCurrentPage, setItemsPerPage, setSortOrder } from '../redux/productsSlice';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    items,
    selectedCategory,
    selectedSubCategory,
    currentPage,
    itemsPerPage,
    sortOrder,
    searchQuery
  } = useSelector((state: RootState) => state.products);

  const filteredProducts = items.filter(product => {
    const matchMain =
      !selectedCategory ||
      selectedCategory.toLowerCase() === 'all' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSub =
      !selectedSubCategory ||
      selectedSubCategory.toLowerCase() === 'all' ||
      product.subCategory?.toLowerCase() === selectedSubCategory.toLowerCase();
    const matchSearch =
      !searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchMain && matchSub && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <label className="font-medium">Sort by price:</label>
          <select
            className="border rounded px-2 py-1"
            value={sortOrder || ''}
            onChange={e =>
              dispatch(setSortOrder(e.target.value === '' ? null : (e.target.value as 'asc' | 'desc')))
            }
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium">Items per page:</label>
          <select
            className="border rounded px-2 py-1"
            value={itemsPerPage}
            onChange={e => dispatch(setItemsPerPage(Number(e.target.value)))}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => dispatch(setCurrentPage(page))}
      />
    </div>
  );
};

export default ProductList;