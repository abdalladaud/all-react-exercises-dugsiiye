import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-2">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-5 py-3 rounded-md"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;