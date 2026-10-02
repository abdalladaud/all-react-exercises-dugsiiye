import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { recipes } from "../data/data";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <>
        <Navbar />

        <div className="text-center py-20">
          <h1 className="text-3xl font-bold">
            Recipe not found
          </h1>

          <Link
            to="/recipes"
            className="text-pink-500 mt-4 inline-block"
          >
            Back to Recipes
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-8">
        <Link
          to="/recipes"
          className="text-pink-500 text-sm"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow p-7 mt-4">
          <span className="inline-block bg-pink-100 text-pink-500 text-xs px-2 py-1 rounded mb-3">
            {recipe.category}
          </span>

          <h1 className="text-3xl font-bold mb-6">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-8">
            {recipe.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-bold text-lg mb-3">
                Ingredients
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3">
                Instructions
              </h2>

              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions.map((instruction) => (
                  <li key={instruction}>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetail;