import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { categories } from "../data/data";

function Categories() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Categories
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow h-fit">
            <h2 className="font-bold mb-4">
              Categories
            </h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="block px-3 py-2 rounded hover:bg-pink-50 hover:text-pink-500"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </aside>

          {/* Nested route content */}
          <section className="md:col-span-3">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Categories;