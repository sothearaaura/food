
import React from 'react';
import { useMemo } from 'react';

const categoriesData = [
  {
    id: 1,
    name: "Drinks & Refreshments",
    count: 31,
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/026/500/574/small_2x/summer-refreshing-beverages-photo.jpg",
    link: "/category/drinks"
  },
  {
    id: 2,
    name: "Frozen Foods",
    count: 112,
    imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/stock%2FGettyImages-119453733",
    link: "/category/frozen"
  },
  {
    id: 3,
    name: "Fruits & Vegetables",
    count: 73,
    imageUrl: "https://www.perfection.com.au/hs-fs/hubfs/Produce_LR_Category_Proprietary%20Fruit%20and%20Vegetables%20Group_Styled_2022_03%20(1).jpg?width=1500&name=Produce_LR_Category_Proprietary%20Fruit%20and%20Vegetables%20Group_Styled_2022_03%20(1).jpg",
    link: "/category/produce"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    count: 235,
    imageUrl: "https://extrafoods.com.au/wp-content/uploads/2024/11/Meat-Seafood.webp",
    link: "/category/meat-seafood"
  },
  {
    id: 5,
    name: "Snacks & Confectionery",
    count: 98,
    imageUrl: "https://extrafoods.com.au/wp-content/uploads/2024/11/snacks-confectionery.webp",
    link: "/category/snacks"
  },
  {
    id: 6,
    name: "Bakery & Desserts",
    count: 64,
    imageUrl: "https://pakistanijournal.com/wp-content/uploads/2023/03/Top-5-Bakeries-in-Karachi-That-Will-Satisfy-Your-Sweet-Cravings.jpg",
    link: "/category/bakery"
  },
  {
    id: 7,
    name: "Condiments & Sauces",
    count: 96,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7yABMlO8CS9-_PPfwN1U8ifTsMd5eD_4ng&s",
    link: "/category/condiments"
  },
  {
    id: 8,
    name: "Staples & Cooking Ingredients",
    count: 155,
    imageUrl: "https://www.hwcmagazine.com/wp-content/uploads/2025/05/Essential-Asian-Pantry-Staples-5116.jpg",
    link: "/category/ingredients"
  },
];

const CategoryCard = ({ category }) => {
  return (
    <a 
      href={category.link} 
      className="group block w-full aspect-[4/3] relative overflow-hidden rounded-xl shadow-xl transform transition duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
     
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/374151/ffffff?text=Image+Missing"; }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-300 group-hover:from-gray-900/90"></div>
      
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white w-full">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-1 tracking-wider group-hover:text-amber-300 transition-colors duration-300">
          {category.name.toUpperCase()}
        </h2>
        <p className="text-sm font-semibold text-gray-300">
          {category.count} PRODUCTS
        </p>
        
        {/* Subtle Hover Indicator */}
        <span className="absolute right-6 bottom-6 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          →
        </span>
      </div>
    </a>
  );
};

export default function Category() {

  const totalCategories = useMemo(() => categoriesData.length, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 font-sans">
      
      {/* Page Header */}
      <header className="text-center py-8 mt-6 mb-8 border-b-2 border-amber-500/50">
        <h1 className=" text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Discover All Categories
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore our complete range of high-quality products across <strong className="text-amber-500">{totalCategories}</strong> major food groups.
        </p>
      </header>


{/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-12">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Footer CTA */}
      <footer className="text-center mt-12 p-6 bg-amber-500/10 rounded-xl border border-amber-500/30">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Can't find what you're looking for? <a href="#" className="text-amber-500 hover:text-amber-400 font-bold underline">Contact our support team!</a>
        </p>
      </footer>
    </div>
  );
}