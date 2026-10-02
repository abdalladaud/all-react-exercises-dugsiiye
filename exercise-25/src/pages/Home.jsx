import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to Recipe Book
          </h1>

          <p className="text-gray-600">
            Discover delicious recipes and explore different
            categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            to="/recipes"
            className="bg-white p-8 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2">
              Browse Recipes
            </h2>

            <p className="text-gray-600">
              View all available recipes.
            </p>
          </Link>

          <Link
            to="/categories"
            className="bg-white p-8 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2">
              Explore Categories
            </h2>

            <p className="text-gray-600">
              Find recipes by category.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;