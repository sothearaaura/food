export default function Food() {
  return (
    <div>
    
      <div className="w-full justify-between flex items-center py-10">
        <span className="text-2xl font-medium md:text-3xl">Popular Dishes</span>
        <span className="text-xl font-medium px-3 py-1 rounded-xl border-2 border-blue-500 cursor-pointer">
          View all
        </span>
      </div>

      <div className="w-full grid gap-3 py-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://passionate-travel.com/wp-content/uploads/2022/12/khmer-amok-river-fish.jpg"
            alt="Fish Amok"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">FISH AMOK</h1>
              <p className="text-sm">
                A creamy coconut curry steam-cooked in a banana leaf, considered Cambodia's national dish.
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://www.frontiercoop.com/media/recipe/resized/520x520/wysiwyg/tmp/basic-red-curry-1080x1080.jpg"
            alt="Khmer Red Curry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">RED CURRY</h1>
              <p className="text-sm">
                A less spicy, coconut milk-based curry with beef or chicken, potatoes, and sweet potatoes.
              </p>
            </div>
          </div>
        </div>

      
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://i.ytimg.com/vi/d6rloVVSxyk/sddefault.jpg"
            alt="Beef Lok Lak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">BEEF LOK LAK</h1>
              <p className="text-sm">
                Stir-fried sliced beef served on a bed of lettuce with a pepper-lime dipping sauce.
              </p>
            </div>
          </div>
        </div>

        
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/bc/18/fb/bc18fb7e0f66d1da0a7a375f05eb6b7c.jpg"
            alt="Noodle Soup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">KUY TEAV</h1>
              <p className="text-sm">
                A popular breakfast dish: pork or beef bone broth with rice noodles and herbs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}