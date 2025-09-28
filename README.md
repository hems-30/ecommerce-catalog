# EthioMart

A modern **React + Redux e-commerce product catalog** application with filtering, search, and cart functionality. This project demonstrates a fully functional front-end e-commerce experience, built with TypeScript, Tailwind CSS, and React Router for seamless navigation.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Project Overview
This project is a **product catalog** where users can:
- Browse products by category and subcategory.
- Search for products using a search bar.
- Sort products by price.
- Add products to a cart with quantity management.
- View product details on a dedicated page.
- Navigate seamlessly between pages, including a 404 page for invalid URLs.

It’s designed to demonstrate modern front-end development best practices, including:
- State management with Redux.
- Lazy loading and code splitting with React Suspense.
- Responsive design using Tailwind CSS.
- Modular component-based architecture.

---

## Features
- **Dynamic Product Listing:** Products are displayed in a responsive grid with images, titles, prices (USD + ETB), and subcategories.  
- **Product Filtering:** Filter products by main categories and subcategories.  
- **Search Functionality:** Real-time search by product name.  
- **Sorting & Pagination:** Sort products by price (low → high / high → low) and navigate through multiple pages.  
- **Product Details Page:** Click on a product to view detailed information.  
- **Shopping Cart:** Add, remove, increase, or decrease quantity of products. Cart shows total in USD and ETB.  
- **Lazy Loading & Optimized Build:** Pages are loaded only when needed for faster performance.  
- **404 Page Handling:** Friendly 404 page for invalid routes.  
- **Responsive Design:** Works on mobile, tablet, and desktop screens.  

---

## Technologies Used
- **React** (TypeScript)
- **Redux Toolkit** (state management)
- **React Router v6** (routing)
- **Tailwind CSS** (styling)
- **React Suspense & Lazy** (code splitting)
- **JavaScript ES6+**
- **Node.js & npm** (package management)

---

## Folder Structure
ecommerce-catalog/
├─ public/
│ ├─ images/ # Product images
├─ src/
│ ├─ api/ # API functions (productsApi.ts)
│ ├─ components/ # Reusable UI components
│ │ ├─ Header.tsx
│ │ ├─ Footer.tsx
│ │ ├─ FilterBar.tsx
│ │ ├─ ProductCard.tsx
│ │ ├─ ProductList.tsx
│ │ ├─ Pagination.tsx
│ │ └─ Icon.tsx
│ ├─ data/ # Product sample data
│ ├─ pages/ # Main pages (Home, Shop, Cart, etc.)
│ ├─ redux/ # Redux slices and store
│ ├─ App.tsx
│ └─ index.tsx
├─ package.json
├─ tsconfig.json
└─ README.md

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

---

## Usage
1. Browse products on the **Shop** page.
2. Use **filters** to narrow products by category/subcategory.
3. Use the **search bar** to find a product by name.
4. **Sort products by price** using the dropdown.
5. **Add items to the cart**, adjust quantities, and see the total.
6. Click a product to view **detailed information**.
7. Navigate between pages via the **header links**.
8. Invalid URLs show a friendly **404 page**.

---

## Future Enhancements
- Implement **checkout and payment integration**.
- Add **user authentication and profiles**.
- Connect to a **real backend or external API**.
- Add **product reviews and ratings**.
- Enable **wishlists and favorites**.

---

## License
This project is open-source and available under the **MIT License**.

---

## Author
**Hemen Solomon**

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/hems-30/<repo-name>.git
   cd ecommerce-catalog
2. Install dependencies:
    bash
    npm install
3. Start the development server:
    bash
    npm start
The app will run at http://localhost:3000.

