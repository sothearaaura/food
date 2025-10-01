
import React from 'react';


const products = [
  {
    id: 1,
    name: "Signature BBQ Burger Combo",
    description: "Flame-grilled beef patty, crispy bacon, melted cheddar, served with sweet potato fries.",
    originalPrice: 22.50,
    discountPercent: 30,
    
    imageUrl: "https://static.vecteezy.com/system/resources/previews/023/809/533/large_2x/tasty-hamburger-with-beef-ai-generative-free-photo.jpg",
  },
  {
    id: 2,
    name: "Authentic Italian Stone-Baked Pizza",
    description: "Large size, loaded with fresh basil, mozzarella, and imported Italian sausage.",
    originalPrice: 38.99,
    discountPercent: 45,
    
    imageUrl: "https://img.freepik.com/premium-photo/traditional-italian-pizza-from-stone-oven-with-fresh-steam-italian-pizzeria_144356-107580.jpg",
  },
  {
    id: 3,
    name: "Spicy Szechuan Dan Dan Noodles",
    description: "Hand-pulled noodles tossed in a fiery, savory Szechuan chili oil sauce with minced pork.",
    originalPrice: 16.00,
    discountPercent: 25,
   
    imageUrl: "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
  },
  {
    id: 4,
    name: "Triple Chocolate Lava Cake",
    description: "Warm, gooey chocolate cake with a melting center, served with raspberry coulis.",
    originalPrice: 14.99,
    discountPercent: 35,
  
    imageUrl: "https://cleobuttera.com/wp-content/uploads/2016/02/classic-whipped-cream-wl.jpg",
  },
];

const calculateDiscountedPrice = (original, percent) => {
    return (original * (1 - percent / 100)).toFixed(2);
};

// Component for a single Product Card
const ProductCard = ({ product }) => {
    const discountedPrice = calculateDiscountedPrice(product.originalPrice, product.discountPercent);

    return (
        <div className="product-card aspect-[16/18] bg-gray-800 rounded-xl overflow-hidden relative border border-blue-600/50 shadow-lg transform hover:scale-[1.03] transition duration-300">
            
            {/* Discount Badge with Animation (Kept the glowing effect) */}
            <span className="discount-badge absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10 shadow-xl">
                SAVE {product.discountPercent}%
            </span>
            
            {/* Image Section */}
            <div className="h-2/5 relative">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/1f2937/ffffff?text=Image+Error"; }}
                />
            </div>
            
            {/* Details and Pricing */}
            <div className="p-4 text-white h-3/5 flex flex-col justify-between">
                <div>
                    <h1 className="font-extrabold text-xl mb-1 text-blue-300">
                        {product.name.toUpperCase()}
                    </h1>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                        {product.description}
                    </p>
                </div>
                
                {/* Price Block */}
                <div className="mb-4">
                    <span className="text-xs line-through text-gray-500 block">
                        Original: ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-4xl font-black text-yellow-400">
                        ${discountedPrice}
                    </span>
                </div>
                
                {/* Call to Action Button */}
                <button className="add-to-cart-btn w-full px-4 py-3 bg-red-700 rounded-lg text-white font-bold hover:bg-red-600 transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


export default function OutSpacial() {
  return (
    // Inject Custom Styles for animation (required in single file React)
    <div className="p-4 md:p-8 min-h-screen bg-gray-900">
      <style>
        {`
          /* Custom Keyframe for Glowing Discount */
          @keyframes glow-pulse {
              0% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.7); }
              100% { box-shadow: 0 0 15px rgba(239, 68, 68, 1); }
          }
          .discount-badge {
              animation: glow-pulse 1.5s infinite alternate;
          }
          /* Card Hover Effect */
          .product-card {
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
        `}
      </style>

      {/* Header (Title changed to reflect food theme) */}
      <div className="w-full justify-between flex items-center py-5 md:py-10 border-b border-gray-700">
        <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
          Global Gourmet Deals
        </span>
        <span className="text-lg font-medium px-4 py-2 rounded-xl bg-red-600 text-white cursor-pointer hover:bg-red-500 transition duration-200">
          View all Meals
        </span>
      </div>

      {/* Product Grid */}
      <div className="w-full grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Footer CTA (Text changed to reflect food theme) */}
      <div className="text-center mt-12 p-6 bg-gray-800 rounded-xl">
        <p className="text-xl font-semibold text-gray-300">Don't let these delicious deals cool down!</p>
      </div>
    </div>
  );
}