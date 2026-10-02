import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import { useBlog } from "../context/BlogContext";

function Home() {
  const { posts } = useBlog();

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(
    location.search
  );

  const search = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;

    if (value) {
      navigate(`/?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Blog Posts
            </h1>

            <p className="text-gray-600 mt-2">
              Read our latest posts.
            </p>
          </div>

          <Link
            to="/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create Post
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search posts..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-bold text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.content}
                </p>

                <span className="text-blue-600 text-sm mt-3 inline-block">
                  Read more →
                </span>
              </Link>
            ))
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-gray-500">
                No posts found.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;