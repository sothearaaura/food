export default function Fruit() {
  return (
    <div>
      {/* Header */}
      <div className="w-full justify-between flex items-center py-10">
        <span className="text-2xl font-medium md:text-3xl text-green-700">Fresh Fruits & Produce</span>
        <span className="text-xl font-medium px-3 py-1 rounded-xl border-2 border-green-500 text-green-700 cursor-pointer hover:bg-green-50 transition duration-150">
          View all
        </span>
      </div>

      {/* Fruit Grid */}
      <div className="w-full grid gap-4 py-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Mango (Svay) */}
        <div className="aspect-[16/10] rounded-xl shadow-lg overflow-hidden relative group">
          <img
            src="https://media.istockphoto.com/id/1163092159/photo/delicious-indian-alphonso-mango-fruit-salad.jpg?s=612x612&w=0&k=20&c=CTIr0-tR45T6mnmlIJdFgC2a6QJaKUlnzovT3ZgMCGM="
            alt="Mango"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h1 className="font-bold text-xl">SWEET MANGOES</h1>
              <p className="text-sm opacity-90">
                Fresh, juicy mangoes perfect for eating or blending into a shake (Teuk Krolok).
              </p>
            </div>
          </div>
        </div>

        {/* Durian (Thornot) */}
        <div className="aspect-[16/10] rounded-xl shadow-lg overflow-hidden relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOANLoa0BOZxJmwFLmBBEiMD8S0dXNc0DIz7lgY9xcf9_NHjjduzf88LpCgxFn8_B1Eqg&usqp=CAU"
            alt="Durian"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h1 className="font-bold text-xl">KAMPOT DURIAN</h1>
              <p className="text-sm opacity-90">
                The King of Fruits—creamy, pungent, and irresistibly sweet.
              </p>
            </div>
          </div>
        </div>

        {/* Coconut (Dong) */}
        <div className="aspect-[16/10] rounded-xl shadow-lg overflow-hidden relative group">
          <img
            src="https://radhefarms.com/cdn/shop/files/fresh-green-coconut-1.jpg?v=1688742877"
            alt="Coconut"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h1 className="font-bold text-xl">YOUNG COCONUT</h1>
              <p className="text-sm opacity-90">
                Perfect for fresh, hydrating water and tender meat.
              </p>
            </div>
          </div>
        </div>

        {/* Dragon Fruit (Peleu Neak) */}
        <div className="aspect-[16/10] rounded-xl shadow-lg overflow-hidden relative group">
          <img
            src="https://static.wixstatic.com/media/58baba_7cfbda87c4b54a77a5a2f5d0a0b9cddc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            alt="Dragon Fruit"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h1 className="font-bold text-xl">DRAGON FRUIT</h1>
              <p className="text-sm opacity-90">
                Vibrant pink fruit with sweet, speckled white flesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}