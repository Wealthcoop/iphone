import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Custom Studio Text Logo replacing the Apple SVG icon */}
        <div className="flex items-center gap-2 cursor-pointer font-semibold text-lg tracking-wider text-white">
          <span className="bg-white text-black px-2 py-0.5 rounded text-sm font-black">TW</span>
          TECH WORLD
        </div>

        {/* Dynamic navigation items array mapped out */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        {/* Clean, generic functional action buttons */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button className="text-xs bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-gray-200 transition-all">
            Console
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
