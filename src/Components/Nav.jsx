import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
// ត្រូវ​បន្ថែម​ការ​នាំចូល Link ពី react-router-dom
import { Link } from "react-router-dom"; 

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-green-50 shadow-sm fixed w-full top-0 left-0 z-50 border-2 border-dashed ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-amber-900">FOOD SHOP</span>
        </div>

        {/* Desktop Links - ប្រើ <Link> ជំនួស <a> */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-amber-800 hover:text-amber-600 transition-colors">
            <span>Home</span>
          </Link>
          <Link to="/category" className="flex items-center space-x-1 text-amber-800 hover:text-amber-600 transition-colors">
            <span>Category</span>
          </Link>
          <Link to="/outspacial" className="flex items-center space-x-1 text-amber-800 hover:text-amber-600 transition-colors">
            <span>Out Spacail</span>
          </Link>
          <Link to="/product" className="flex items-center space-x-1 text-amber-800 hover:text-amber-600 transition-colors">
            <span>Contact</span>
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
          <ShoppingBag className="w-5 h-5 mr-2" />Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border border-amber-300 rounded text-amber-800"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - ប្រើ <Link> ជំនួស <a> */}
      {isOpen && (
        <div className="md:hidden bg-amber-50 shadow-lg p-4 space-y-4">
          <Link to="/" className="block text-amber-800 hover:text-amber-600 transition-colors">Home</Link>
          <Link to="/contact" className="block text-amber-800 hover:text-amber-600 transition-colors">Contact</Link>
          <Link to="/category" className="block text-amber-800 hover:text-amber-600 transition-colors">Category</Link>
          <Link to="/outspacial" className="block text-amber-800 hover:text-amber-600 transition-colors">Out Spacail</Link>
          <button className="w-full bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">Order Now</button>
        </div>
      )}
    </nav>
  );
}