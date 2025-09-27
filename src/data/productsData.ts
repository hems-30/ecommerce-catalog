export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  subCategory?: string;
  image: string;
  description?: string;
}

export const products: Product[] = [
  // Women - Traditional Clothes (6)
  { id: 1, title: "Habesha Kemis White & Gold", price: 120, category: "Women", subCategory: "Traditional Clothes", image: "/images/women1.jpg", description: "Elegant white Habesha Kemis with delicate gold embroidery, handcrafted from soft cotton. Ideal for weddings, cultural celebrations, and traditional ceremonies." },
  { id: 2, title: "Habesha Kemis Blue & Gold", price: 135, category: "Women", subCategory: "Traditional Clothes", image: "/images/women2.jpg", description: "Stunning blue Habesha Kemis adorned with gold thread embroidery, featuring traditional Ethiopian patterns. Perfect for festive occasions and cultural events." },
  { id: 3, title: "Modern White Kemis", price: 150, category: "Women", subCategory: "Traditional Clothes", image: "/images/women3.jpg", description: "A contemporary take on the classic Habesha Kemis, crafted from premium cotton with minimalist embroidery for modern yet cultural style." },
  { id: 4, title: "Red Traditional Dress", price: 130, category: "Women", subCategory: "Traditional Clothes", image: "/images/women4.jpg", description: "Vibrant red traditional dress featuring intricate handwoven designs, lightweight and comfortable for celebrations and formal gatherings." },
  { id: 5, title: "Green Embroidered Dress", price: 140, category: "Women", subCategory: "Traditional Clothes", image: "/images/women5.jpg", description: "Green dress with detailed embroidery along the neckline and hem, made with soft cotton. Ideal for festive and formal occasions." },
  { id: 6, title: "Yellow Modern Kemis", price: 125, category: "Women", subCategory: "Traditional Clothes", image: "/images/women6.jpg", description: "Bright yellow modern Kemis with subtle traditional patterns, designed for comfort and elegance during cultural events." },

  // Women - Casual Wear (6)
  { id: 7, title: "Floral Summer Dress", price: 40, category: "Women", subCategory: "Casual Wear", image: "/images/women7.jpg", description: "Lightweight floral summer dress with soft fabric, perfect for casual outings, picnics, and daytime events." },
  { id: 8, title: "Chic Evening Dress", price: 75, category: "Women", subCategory: "Casual Wear", image: "/images/women8.jpg", description: "Elegant evening dress in a flattering silhouette, made with premium material for dinners, parties, and social gatherings." },
  { id: 9, title: "Denim Skirt & Top", price: 55, category: "Women", subCategory: "Casual Wear", image: "/images/women9.jpg", description: "Trendy denim skirt paired with matching top, crafted for casual style with comfort and durability in mind." },
  { id: 10, title: "Summer Maxi Dress", price: 60, category: "Women", subCategory: "Casual Wear", image: "/images/women10.jpg", description: "Flowy maxi dress designed for hot summer days, made with breathable fabric and vibrant patterns." },
  { id: 11, title: "Casual Shirt & Jeans", price: 45, category: "Women", subCategory: "Casual Wear", image: "/images/women11.jpg", description: "Classic casual outfit with soft shirt and well-fitted jeans, perfect for everyday activities and social meetups." },
  { id: 12, title: "Striped T-Shirt & Shorts", price: 35, category: "Women", subCategory: "Casual Wear", image: "/images/women12.jpg", description: "Comfortable striped t-shirt with matching shorts, ideal for relaxed weekends, walks, and casual summer wear." },

  // Men - Casual Wear (6)
  { id: 13, title: "Slim Fit T-Shirt", price: 22, category: "Men", subCategory: "Casual Wear", image: "/images/men1.jpg", description: "Soft cotton slim-fit t-shirt offering casual style and comfort for daily wear or leisure activities." },
  { id: 14, title: "Cotton Jacket", price: 55, category: "Men", subCategory: "Casual Wear", image: "/images/men2.jpg", description: "Lightweight cotton jacket with a modern cut, perfect for layering during cool weather or casual outings." },
  { id: 15, title: "Polo Shirt", price: 30, category: "Men", subCategory: "Casual Wear", image: "/images/men3.jpg", description: "Classic polo shirt made from breathable fabric, suitable for casual events, sports, and daily wear." },
  { id: 16, title: "Casual Shorts", price: 28, category: "Men", subCategory: "Casual Wear", image: "/images/men4.jpg", description: "Comfortable casual shorts with a relaxed fit, ideal for summer, outdoor activities, or lounging." },
  { id: 17, title: "Denim Jeans", price: 50, category: "Men", subCategory: "Casual Wear", image: "/images/men5.jpg", description: "Durable denim jeans with a classic design, perfect for casual wear, daily outings, and versatile styling." },
  { id: 18, title: "Casual Hoodie", price: 40, category: "Men", subCategory: "Casual Wear", image: "/images/men6.jpg", description: "Soft and cozy hoodie with adjustable hood, ideal for casual layering, cool evenings, and relaxed style." },

  // Men - Formal (4)
  { id: 19, title: "Formal Shirt", price: 35, category: "Men", subCategory: "Formal", image: "/images/men7.jpg", description: "Crisp formal shirt crafted for office wear, business meetings, and formal occasions with classic elegance." },
  { id: 20, title: "Formal Trousers", price: 60, category: "Men", subCategory: "Formal", image: "/images/men8.jpg", description: "Tailored formal trousers designed for a sharp professional look, comfortable for daily office use." },
  { id: 21, title: "Business Blazer", price: 120, category: "Men", subCategory: "Formal", image: "/images/men9.jpg", description: "Structured blazer with classic design, perfect for business meetings, presentations, and formal events." },
  { id: 22, title: "Dress Shoes", price: 90, category: "Men", subCategory: "Formal", image: "/images/men10.jpg", description: "Polished leather dress shoes that complement formal outfits, providing style and comfort for long wear." },

  // Electronics - Laptops & Computers (4)
  { id: 23, title: "Dell Inspiron 15", price: 550, category: "Electronics", subCategory: "Laptops & Computers", image: "/images/electronics1.jpg", description: "Reliable Dell laptop with 15-inch display, 8GB RAM, and 512GB SSD, suitable for work, study, and everyday use." },
  { id: 24, title: "MacBook Air M2", price: 1199, category: "Electronics", subCategory: "Laptops & Computers", image: "/images/electronics2.jpg", description: "Ultra-thin MacBook Air with M2 chip, long battery life, and sleek design, perfect for professionals and students." },
  { id: 25, title: "HP Pavilion Gaming", price: 800, category: "Electronics", subCategory: "Laptops & Computers", image: "/images/electronics3.jpg", description: "High-performance gaming laptop with dedicated GPU, fast processor, and immersive display for gaming and multitasking." },
  { id: 26, title: "Lenovo ThinkPad X1", price: 1000, category: "Electronics", subCategory: "Laptops & Computers", image: "/images/electronics4.jpg", description: "Business laptop with robust performance, lightweight design, and long-lasting battery for professionals on the go." },

  // Electronics - Smartphones (4)
  { id: 27, title: "iPhone 15 Pro", price: 1200, category: "Electronics", subCategory: "Smartphones", image: "/images/electronics5.jpg", description: "Flagship smartphone with advanced camera system, fast processor, and premium build quality." },
  { id: 28, title: "Samsung Galaxy S23", price: 950, category: "Electronics", subCategory: "Smartphones", image: "/images/electronics6.jpg", description: "High-end Samsung smartphone with stunning display, excellent performance, and versatile camera setup." },
  { id: 29, title: "Google Pixel 8", price: 899, category: "Electronics", subCategory: "Smartphones", image: "/images/electronics7.jpg", description: "Google Pixel smartphone featuring pure Android experience, exceptional camera quality, and smooth performance." },
  { id: 30, title: "OnePlus 12", price: 799, category: "Electronics", subCategory: "Smartphones", image: "/images/electronics8.jpg", description: "Fast and responsive OnePlus phone with AMOLED display, long battery life, and sleek modern design." },

  // Beauty & Health (4)
  { id: 31, title: "Organic Facial Cream", price: 25, category: "Beauty & Health", subCategory: "Skincare", image: "/images/beauty1.jpg", description: "Nourishing organic facial cream enriched with natural ingredients to hydrate and rejuvenate the skin." },
  { id: 32, title: "Vitamin C Serum", price: 35, category: "Beauty & Health", subCategory: "Skincare", image: "/images/beauty2.jpg", description: "Brightening vitamin C serum designed to reduce dark spots, improve skin tone, and boost radiance." },
  { id: 33, title: "Makeup Kit", price: 50, category: "Beauty & Health", subCategory: "Makeup", image: "/images/beauty3.jpg", description: "Complete makeup kit with versatile shades for eyes, lips, and face, suitable for daily and special occasions." },
  { id: 34, title: "Haircare Shampoo", price: 20, category: "Beauty & Health", subCategory: "Haircare", image: "/images/beauty4.jpg", description: "Gentle shampoo formulated to cleanse, strengthen, and nourish all hair types." },

  // Sports & Outdoors (4)
  { id: 35, title: "Yoga Mat", price: 20, category: "Sports & Outdoors", subCategory: "Gym", image: "/images/sports1.jpg", description: "Non-slip yoga mat offering comfort and stability for yoga, pilates, or home workouts." },
  { id: 36, title: "Running Shoes", price: 60, category: "Sports & Outdoors", subCategory: "Outdoor", image: "/images/sports2.jpg", description: "Lightweight running shoes designed for maximum comfort, support, and performance on any terrain." },
  { id: 37, title: "Cycling Helmet", price: 45, category: "Sports & Outdoors", subCategory: "Cycling", image: "/images/sports3.jpg", description: "Protective cycling helmet with adjustable straps for safety and comfort during rides." },
  { id: 38, title: "Fitness Tracker", price: 80, category: "Sports & Outdoors", subCategory: "Fitness", image: "/images/sports4.jpg", description: "Advanced fitness tracker monitoring steps, heart rate, and sleep for healthier daily routines." },

  // Jewelry & Watches (4)
  { id: 39, title: "Gold Bracelet", price: 55, category: "Jewelry & Watches", subCategory: "Bracelets", image: "/images/jewelry1.jpg", description: "Elegant gold bracelet with polished finish, suitable for both casual and formal wear." },
  { id: 40, title: "Leather Bracelet", price: 30, category: "Jewelry & Watches", subCategory: "Bracelets", image: "/images/jewelry2.jpg", description: "Stylish leather bracelet with adjustable strap, perfect for everyday fashion." },
  { id: 41, title: "Silver Ring", price: 70, category: "Jewelry & Watches", subCategory: "Rings", image: "/images/jewelry3.jpg", description: "Classic silver ring crafted with attention to detail, ideal for special occasions." },
  { id: 42, title: "Gold Ring", price: 90, category: "Jewelry & Watches", subCategory: "Rings", image: "/images/jewelry4.jpg", description: "Beautiful gold ring with a polished finish, designed to enhance elegance and style." },

  // Bags & Luggage (4)
  { id: 43, title: "Fjallraven Kanken Backpack", price: 110, category: "Bags & Luggage", subCategory: "Backpacks", image: "/images/bags1.jpg", description: "Durable Kanken backpack with spacious compartments, ideal for daily use, travel, or school." },
  { id: 44, title: "Nike Sports Backpack", price: 85, category: "Bags & Luggage", subCategory: "Backpacks", image: "/images/bags2.jpg", description: "Sporty backpack with multiple pockets, designed for gym, travel, and everyday activities." },
  { id: 45, title: "Samsonite Laptop Backpack", price: 150, category: "Bags & Luggage", subCategory: "Backpacks", image: "/images/bags3.jpg", description: "Premium laptop backpack with padded compartments, perfect for work, travel, and business trips." },
  { id: 46, title: "Leather Handbag", price: 120, category: "Bags & Luggage", subCategory: "Handbags", image: "/images/bags4.jpg", description: "Stylish leather handbag with spacious interior, ideal for work, shopping, or social events." },

  // Sale / Offers (2)
  { id: 47, title: "Discounted T-Shirt", price: 15, category: "Sale / Offers", subCategory: "Discounts", image: "/images/sale1.jpg", description: "Affordable t-shirt with comfortable fabric, perfect for casual everyday wear." },
  { id: 48, title: "Discounted Shoes", price: 25, category: "Sale / Offers", subCategory: "Discounts", image: "/images/sale2.jpg", description: "Stylish yet budget-friendly shoes suitable for casual outings or daily use." },

  // Extra products to reach 64 (16)
  { id: 49, title: "Women's Casual Blouse", price: 45, category: "Women", subCategory: "Casual Wear", image: "/images/women13.jpg", description: "Soft casual blouse in versatile design, ideal for daily wear and pairing with skirts or jeans." },
  { id: 50, title: "Men's Formal Vest", price: 65, category: "Men", subCategory: "Formal", image: "/images/men11.jpg", description: "Classic formal vest adding a touch of elegance to any dress shirt or suit combination." },
  { id: 51, title: "Laptop Sleeve", price: 25, category: "Electronics", subCategory: "Accessories", image: "/images/electronics9.jpg", description: "Protective laptop sleeve made with soft materials, lightweight and portable." },
  { id: 52, title: "Smartwatch", price: 150, category: "Electronics", subCategory: "Accessories", image: "/images/electronics10.jpg", description: "Feature-packed smartwatch with fitness tracking, notifications, and sleek modern design." },
  { id: 53, title: "Hair Serum", price: 30, category: "Beauty & Health", subCategory: "Haircare", image: "/images/beauty5.jpg", description: "Nourishing hair serum to strengthen, shine, and reduce frizz for healthy hair." },
  { id: 54, title: "Gym Shorts", price: 25, category: "Sports & Outdoors", subCategory: "Gym", image: "/images/sports5.jpg", description: "Comfortable gym shorts with breathable fabric, ideal for workouts and training." },
  { id: 55, title: "Tennis Racket", price: 120, category: "Sports & Outdoors", subCategory: "Outdoor", image: "/images/sports6.jpg", description: "Professional-grade tennis racket for casual players and competitive matches." },
  { id: 56, title: "Necklace Pendant", price: 80, category: "Jewelry & Watches", subCategory: "Necklaces", image: "/images/jewelry5.jpg", description: "Elegant pendant necklace made with attention to detail, perfect for gifting or personal style." },
  { id: 57, title: "Wrist Watch Classic", price: 200, category: "Jewelry & Watches", subCategory: "Watches", image: "/images/jewelry6.jpg", description: "Classic wristwatch with durable strap and precise timekeeping, suitable for all occasions." },
  { id: 58, title: "Backpack Travel", price: 95, category: "Bags & Luggage", subCategory: "Backpacks", image: "/images/bags5.jpg", description: "Spacious and durable travel backpack with multiple compartments, ideal for trips." },
  { id: 59, title: "Handbag Stylish", price: 130, category: "Bags & Luggage", subCategory: "Handbags", image: "/images/bags6.jpg", description: "Chic leather handbag with versatile compartments for everyday or formal use." },
  { id: 60, title: "Suitcase Large", price: 200, category: "Bags & Luggage", subCategory: "Suitcases", image: "/images/bags7.jpg", description: "Large suitcase with sturdy construction, perfect for long trips and travel convenience." },
  { id: 61, title: "Discounted Laptop", price: 400, category: "Sale / Offers", subCategory: "Discounts", image: "/images/sale3.jpg", description: "Budget-friendly laptop suitable for students and casual computing tasks." },
  { id: 62, title: "Discounted Backpack", price: 50, category: "Sale / Offers", subCategory: "Discounts", image: "/images/sale4.jpg", description: "Affordable backpack with practical compartments for daily use or school." },
  { id: 63, title: "Wireless Earbuds", price: 75, category: "Electronics", subCategory: "Accessories", image: "/images/electronics11.jpg", description: "Wireless earbuds delivering crisp sound quality and convenient Bluetooth connectivity." },
  { id: 64, title: "Portable Charger", price: 35, category: "Electronics", subCategory: "Accessories", image: "/images/electronics12.jpg", description: "Compact portable charger to keep devices powered on the go, lightweight and reliable." },
];