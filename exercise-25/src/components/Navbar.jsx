import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-pink-500 font-bold text-xl"
        >
          Recipe Book
        </NavLink>

        <div className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "text-gray-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "text-gray-600"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "text-gray-600"
            }
          >
            Categories
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;