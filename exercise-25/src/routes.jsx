import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Categories from "./pages/Categories";
import CategoryRecipes from "./pages/CategoryRecipes";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/recipes",
    element: <Recipes />,
  },

  {
    path: "/recipes/:id",
    element: <RecipeDetail />,
  },

  {
    path: "/categories",
    element: <Categories />,
    children: [
      {
        path: ":categoryId",
        element: <CategoryRecipes />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);