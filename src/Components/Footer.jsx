export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold">🍴 Foodie Shop</h1>
          <p className="text-gray-300 mt-2">
            Fresh & tasty meals delivered to your door. 
            Your happiness is our recipe!
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
          <p>📍 123 Street, Phnom Penh, Cambodia</p>
          <p>📞 +855 12 345 678</p>
          <p>📧 support@foodieshop.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">📸</a>
            <a href="#" className="hover:text-yellow-400">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Foodie Shop. All Rights Reserved.
      </div>
    </footer>
  )
}