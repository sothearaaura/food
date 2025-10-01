export default function Drink() {
  return (
    <div>
      {/* Header */}
      <div className="w-full justify-between flex items-center py-10">
        <span className="text-2xl font-medium md:text-3xl">Drinks & Beverages</span>
        <span className="text-xl font-medium px-3 py-1 rounded-xl border-2 border-blue-500 cursor-pointer">
          View all
        </span>
      </div>

      {/* Drink Grid */}
      <div className="w-full grid gap-3 py-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Iced Coffee (Kafé Toek Doh Ko) */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://i.pinimg.com/474x/fe/74/f8/fe74f82e9eb922b7ec2964371f12e5d1.jpg"
            alt="Iced Coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">ICED COFFEE</h1>
              <p className="text-sm">
                Strong black coffee mixed with condensed milk, a popular and sweet street drink.
              </p>
            </div>
          </div>
        </div>

        {/* Sugar Cane Juice (Toek Oampoeu) */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://images.slurrp.com/webstories/wp-content/uploads/2024/04/sugarcane-juice-with-garden-background_741910-14936.jpg"
            alt="Sugar Cane Juice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">SUGAR CANE JUICE</h1>
              <p className="text-sm">
                Freshly pressed sugar cane juice, often served over ice with a slice of lime.
              </p>
            </div>
          </div>
        </div>

        {/* Coconut Water (Toek Dong) */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://thumbs.dreamstime.com/b/refreshing-coconut-water-glass-surrounded-tropical-setting-enjoy-ice-set-against-backdrop-perfect-summer-368696840.jpg"
            alt="Coconut Water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">COCONUT WATER</h1>
              <p className="text-sm">
                Cool and refreshing water straight from a young green coconut, a tropical classic.
              </p>
            </div>
          </div>
        </div>

        {/* Fruit Shakes (Teuk Krolok) */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://t3.ftcdn.net/jpg/13/72/20/02/360_F_1372200292_FD0Be1cwp5OUpVOdTnu5s6zfsaBe8eGG.jpg"
            alt="Fruit Shake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">FRUIT SHAKES</h1>
              <p className="text-sm">
                Blended fresh fruit, ice, and condensed milk, with popular flavors like mango or avocado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}