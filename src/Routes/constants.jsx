import React from 'react';

// Icons
export const HomeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
export const CoffeeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2a6 6 0 0 0 4 0V2"/><path d="M12 21a6 6 0 0 0 0-12v12Z"/><path d="M21 6h-7"/><path d="M12 21v-8a6 6 0 0 0-6 6"/><path d="M19 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/></svg>);
export const DessertIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 19h20v-4H2zM2 11h20v4H2zM2 3h20v4H2zM12 19v4M12 3v4"/></svg>);
export const UtensilsIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 21h10"/><path d="m7 15 2-2 2 2"/><path d="M15 15l2-2 2 2"/></svg>);
export const InfoIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>);
export const MailIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
export const ShoppingCartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>);
export const CheckCircleIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>);

export const COLOR_DARK = 'stone-800';
export const COLOR_GOLD = 'yellow-500';

export const MENU_ITEMS = [
    { id: 'c1', name: "Espresso Latte", description: "Smooth espresso with creamy steamed milk. A classic favorite.", price: 4.50, category: 'coffee', img: 'https://placehold.co/400x300/4a2a1a/f7f7f7?text=LATTE' },
    { id: 'c2', name: "Single Origin Black", description: "Rich, aromatic, and bold black coffee. Served hot or over ice.", price: 4.00, category: 'coffee', img: 'https://placehold.co/400x300/2c1b12/ffffff?text=AMERICANO' },
    { id: 'c3', name: "Caramel Macchiato", description: "Layered drink with vanilla syrup, espresso, and caramel drizzle.", price: 5.00, category: 'coffee', img: 'https://placehold.co/400x300/6f4e37/ffffff?text=MACCHIATO' },
    { id: 'c4', name: "Iced Cold Brew", description: "Slow-steeped for a smooth, low-acidity, refreshing taste.", price: 4.75, category: 'coffee', img: 'https://placehold.co/400x300/3c2f2f/ffffff?text=COLD+BREW' },
    { id: 'c5', name: "Hazelnut Cappuccino", description: "Velvety foam, rich espresso, and sweet hazelnut syrup.", price: 5.25, category: 'coffee', img: 'https://placehold.co/400x300/4c342f/ffffff?text=CAPPUCCINO' },
    { id: 'c6', name: "Matcha Green Tea Latte", description: "Vibrant, ceremonial-grade matcha whisked with milk.", price: 5.50, category: 'coffee', img: 'https://placehold.co/400x300/a8c38c/4a2a1a?text=MATCHA' },
    { id: 'b1', name: "Classic Butter Croissant", description: "Flaky, buttery, and baked fresh daily. The perfect Parisian start.", price: 3.50, category: 'pastry', img: 'https://placehold.co/400x300/f5e4c3/4a2a1a?text=CROISSANT' },
    { id: 'b2', name: "Dark Chocolate Tart", description: "Intense 70% dark chocolate ganache in a crisp, sweet pastry shell.", price: 6.50, category: 'pastry', img: 'https://placehold.co/400x300/704241/f7f7f7?text=CHOCOLATE+TART' },
    { id: 'b3', name: "Almond Twice-Baked", description: "Our croissant filled with almond cream and baked again till golden.", price: 5.00, category: 'pastry', img: 'https://placehold.co/400x300/e0d0b0/4a2a1a?text=ALMOND+CROISSANT' },
    { id: 'b4', name: "Pistachio Madeleines (3pc)", description: "Shell-shaped sponge cakes with a hint of vibrant pistachio.", price: 4.25, category: 'pastry', img: 'https://placehold.co/400x300/a8c38c/4a2a1a?text=MADELEINES' },
    { id: 'b5', name: "Strawberry Cheesecake", description: "Creamy New York style cheesecake with fresh strawberry topping.", price: 7.00, category: 'pastry', img: 'https://placehold.co/400x300/f8d8e0/4a2a1a?text=CHEESECAKE' },
    { id: 'b6', name: "Lemon Meringue Pie", description: "Tangy lemon curd topped with sweet, fluffy meringue.", price: 6.00, category: 'pastry', img: 'https://placehold.co/400x300/fdf8d6/4a2a1a?text=LEMON+PIE' },
    { id: 'l1', name: "Smoked Salmon Bagel", description: "Toasted bagel with capers, cream cheese, red onion, and fresh dill.", price: 8.50, category: 'brunch', img: 'https://placehold.co/400x300/8d6e63/ffffff?text=SALMON+BAGEL' },
    { id: 'l2', name: "Avocado Toast", description: "Artisan sourdough, smashed avocado, toasted seeds, and chili flakes.", price: 7.00, category: 'brunch', img: 'https://placehold.co/400x300/a98e82/ffffff?text=AVOCADO+TOAST' },
    { id: 'l3', name: "Truffle Mushroom Omelet", description: "Fluffy eggs with sautéed mushrooms, cheese, and a hint of truffle oil.", price: 9.00, category: 'brunch', img: 'https://placehold.co/400x300/bfae8d/4a2a1a?text=OMELET' },
    { id: 'l4', name: "Granola & Berries Bowl", description: "House-made crunchy granola, Greek yogurt, and seasonal fresh berries.", price: 6.00, category: 'brunch', img: 'https://placehold.co/400x300/d5c4b1/4a2a1a?text=GRANOLA' },
    { id: 'l5', name: "Turkey and Cheese Panini", description: "Roasted turkey, Swiss cheese, and pesto pressed on crusty bread.", price: 8.00, category: 'brunch', img: 'https://placehold.co/400x300/6b7051/ffffff?text=PANINI' },
    { id: 'l6', name: "Soup of the Day", description: "Seasonal soup served with toasted artisan sourdough bread.", price: 5.50, category: 'brunch', img: 'https://placehold.co/400x300/c5c3c1/4a2a1a?text=SOUP' },
];

export const PAGES = {
    home: { name: "Home", icon: HomeIcon },
    menu: { name: "Menu", icon: UtensilsIcon },
    story: { name: "Our Story", icon: InfoIcon },
    contact: { name: "Contact", icon: MailIcon },
};

export const CATEGORIES = [
    { key: 'coffee', name: 'Coffee & Beverages', icon: CoffeeIcon, color: 'text-amber-700' },
    { key: 'pastry', name: 'Patisserie & Desserts', icon: DessertIcon, color: 'text-pink-700' },
    { key: 'brunch', name: 'Brunch & Meals', icon: UtensilsIcon, color: 'text-green-700' },
];