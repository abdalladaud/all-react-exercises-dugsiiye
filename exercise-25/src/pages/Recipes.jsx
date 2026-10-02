import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/data";

function Recipes() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">
          All Recipes
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Recipes;