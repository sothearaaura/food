import { Link } from "react-router-dom"

export default function Cake() {
  return (
    <div>
      {/* Header */}
      <div className="w-full justify-between flex items-center py-10">
        <span className="text-2xl font-medium md:text-3xl">Cakes & Desserts</span>
        <Link to={"/cake"}>
          <span className="text-xl font-medium px-3 py-1 rounded-xl border-2 border-blue-500 cursor-pointer">
            View all
          </span>
        </Link>
      </div>

      {/* Cake Grid */}
      <div className="w-full grid gap-3 py-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Red Velvet */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://chefibpa.com/wp-content/uploads/2025/02/eye-catching-red-velvet-cake-decoration-ideas-to-try.webp"
            alt="Red Velvet Cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">RED VELVET CAKE</h1>
              <p className="text-sm">
                A rich, mild cocoa flavor with a distinctive red color and topped with cream cheese frosting.
              </p>
            </div>
          </div>
        </div>

        {/* Chocolate Lava */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://kolikof.com/cdn/shop/products/ValrhonaLavaCake2_660c237e-7ee3-4bb6-bc02-4fc67c15c25f.jpg?v=1736556715&width=480"
            alt="Chocolate Lava Cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">CHOCOLATE LAVA CAKE</h1>
              <p className="text-sm">
                A decadent dessert with a gooey, warm chocolate center that "erupts" when sliced.
              </p>
            </div>
          </div>
        </div>

        {/* Lemon Drizzle */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://mobilecooks.com/wp-content/uploads/2024/12/1400x919-Brown-butter-lemon-thyme-drizzle-cake-90d04bca-c512-4565-b147-34cb3d2b5611-0-1400x919-1.jpg"
            alt="Lemon Drizzle Cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">LEMON DRIZZLE CAKE</h1>
              <p className="text-sm">
                A moist, tangy cake soaked in a sweet lemon syrup and finished with a sugar glaze.
              </p>
            </div>
          </div>
        </div>

        {/* Cheesecake */}
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
          <img
            src="https://jernejkitchen.com/sites/default/files/strawberry-cheesecake-05-jernejkitchen.jpg"
            alt="New York Cheesecake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-3 text-white">
              <h1 className="font-bold text-lg">NEW YORK CHEESECAKE</h1>
              <p className="text-sm">
                A dense, smooth, and rich baked cheesecake with a graham cracker crust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}