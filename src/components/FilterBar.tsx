import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCategory, setSubCategory, setSearchQuery } from "../redux/productsSlice";

type Category =
  | "Women"
  | "Men"
  | "Electronics"
  | "Beauty & Health"
  | "Sports & Outdoors"
  | "Jewelry & Watches"
  | "Bags & Luggage"
  | "Sale / Offers";

type SubCategory =
  | "All"
  | "Traditional Clothes"
  | "Casual Wear"
  | "Formal"
  | "Accessories"
  | "Others"
  | "Smartphones"
  | "Laptops & Computers"
  | "Headphones"
  | "Makeup"
  | "Skincare"
  | "Haircare"
  | "Supplements"
  | "Gym"
  | "Outdoor"
  | "Cycling"
  | "Fitness"
  | "Rings"
  | "Necklaces"
  | "Watches"
  | "Backpacks"
  | "Handbags"
  | "Suitcases"
  | "Discounts"
  | "Bracelets";

const mainCategories: Category[] = [
  "Women",
  "Men",
  "Electronics",
  "Beauty & Health",
  "Sports & Outdoors",
  "Jewelry & Watches",
  "Bags & Luggage",
  "Sale / Offers",
];

const subCategoriesMap: Record<Category, SubCategory[]> = {
  Women: ["All", "Traditional Clothes", "Casual Wear"],
  Men: ["All", "Casual Wear", "Formal", "Accessories", "Others"],
  Electronics: ["All", "Laptops & Computers", "Smartphones", "Headphones", "Accessories"],
  "Beauty & Health": ["All", "Makeup", "Skincare", "Haircare", "Supplements"],
  "Sports & Outdoors": ["All", "Gym", "Outdoor", "Cycling", "Fitness"],
  "Jewelry & Watches": ["All", "Rings", "Bracelets", "Necklaces", "Watches", "Others"],
  "Bags & Luggage": ["All", "Backpacks", "Handbags", "Suitcases", "Others"],
  "Sale / Offers": ["All", "Discounts"],
};

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCategory, selectedSubCategory, searchQuery } = useSelector(
    (state: RootState) => state.products
  );

  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (cat: Category) => {
    // If clicking the already selected category, toggle to All
    if (selectedCategory === cat) {
      dispatch(setCategory(""));
      dispatch(setSubCategory("All"));
      setOpenCategory(null);
    } else {
      dispatch(setCategory(cat));
      dispatch(setSubCategory("All"));
      setOpenCategory(cat);
    }
  };

  const handleSubCategoryClick = (sub: SubCategory) => {
    dispatch(setSubCategory(sub));
    setOpenCategory(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Search Bar */}
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full max-w-md px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2" ref={dropdownRef}>
        {mainCategories.map(cat => {
          const subCategories = subCategoriesMap[cat];
          const isOpen = openCategory === cat;

          return (
            <div key={cat} className="relative">
              <button
                className={`px-4 py-2 rounded transition-colors duration-200 font-medium ${
                  selectedCategory === cat
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => handleCategoryClick(cat)}
                onMouseEnter={() => setOpenCategory(cat)}
              >
                {cat}
              </button>

              {subCategories && subCategories.length > 0 && (
                <div
                  className={`absolute left-0 mt-1 w-48 bg-white border rounded shadow-md flex flex-col z-20 transition-all duration-200 origin-top transform ${
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                  {subCategories.map(sub => (
                    <button
                      key={sub}
                      className={`px-4 py-2 text-left w-full transition-colors duration-200 ${
                        selectedSubCategory === sub || (sub === "All" && !selectedSubCategory)
                          ? "bg-green-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSubCategoryClick(sub)}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;