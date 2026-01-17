function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar Section */}
      <nav className="flex items-center justify-between px-10 py-3 border-b sticky top-0 bg-white z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-4xl font-black text-yellow-400 tracking-tighter">
            blink<span className="text-green-600">it</span>
          </h1>
          <div className="hidden lg:block">
            <p className="font-extrabold text-sm text-black">Delivery in 8 minutes</p>
            <p className="text-xs text-gray-500 font-medium">Ludhiana, Punjab, India ▾</p>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-12">
          <input 
            type="text" 
            placeholder='Search "chips"' 
            className="w-full bg-gray-50 p-3 pl-10 rounded-xl border border-gray-200 focus:bg-white focus:border-green-600 outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-10">
          <button className="text-lg font-semibold text-gray-700">Login</button>
          <button className="bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 font-bold hover:bg-green-800 transition-colors">
             <span>My Cart</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="p-20 text-center">
        <h2 className="text-3xl font-bold text-gray-300">Blinkit Products Section Coming Soon...</h2>
      </div>
    </div>
  );
}

export default App;