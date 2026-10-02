import { Link, useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { categories, recipes } from "../data/data";

function CategoryRecipes() {
  const { categoryId } = useParams();

  const category = categories.find(
    (category) => category.id === categoryId
  );

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  if (!category) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold">
          Category not found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow mb-5">
        <h2 className="text-2xl font-bold">
          {category.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {category.description}
        </p>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="bg-white p-6 rounded-lg">
          <p className="text-gray-600">
            No recipes available in this category.
          </p>

          <Link
            to="/recipes"
            className="text-pink-500 inline-block mt-3"
          >
            View all recipes
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryRecipes;