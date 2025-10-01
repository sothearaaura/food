export default function Header() {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-400 p-0"> 
      <div className="w-full rounded-none p-8 md:p-12 lg:p-16 text-center shadow-none mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-900 leading-tight">The Fastest Way to Order <br />
          <span className="text-amber-700">Fresh Foods</span>
        </h1>
        <p className="text-md md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">Inspired by Extra Foods, our quick-order system streamlines the process for your daily grocery needs.</p>
        <button className="mt-8 px-8 py-3 bg-amber-700 text-white font-semibold rounded-full shadow-md hover:bg-amber-800 transition-colors duration-300">Start Quick Order</button>
      </div>
    </div>
  );
}