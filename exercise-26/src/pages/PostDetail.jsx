import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import { useBlog } from "../context/BlogContext";

function PostDetail() {
  const { postId } = useParams();

  const { posts } = useBlog();

  const navigate = useNavigate();

  const location = useLocation();

  const currentPost = posts.find(
    (post) => post.id === Number(postId)
  );

  // Read state passed from previous/next navigation
  const statePostId = location.state?.postId;

  console.log("Current post from URL:", postId);
  console.log("Post ID from navigation state:", statePostId);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">
            Post Not Found
          </h1>

          <p className="text-gray-600 mt-2">
            This post does not exist.
          </p>

          <Link
            to="/"
            className="text-blue-600 mt-5 inline-block"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = posts.findIndex(
    (post) => post.id === Number(postId)
  );

  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  const goToPost = (post) => {
    navigate(`/posts/${post.id}`, {
      state: {
        postId: post.id,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="text-blue-600 text-sm"
        >
          ← Back to Posts
        </Link>

        <article className="bg-white rounded-lg shadow p-8 mt-5">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentPost.title}
          </h1>

          <p className="text-gray-700 leading-7 mt-6">
            {currentPost.content}
          </p>

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t">
            {previousPost ? (
              <button
                onClick={() => goToPost(previousPost)}
                className="text-blue-600 hover:underline"
              >
                ← Previous
              </button>
            ) : (
              <span />
            )}

            {nextPost && (
              <button
                onClick={() => goToPost(nextPost)}
                className="text-blue-600 hover:underline"
              >
                Next →
              </button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}

export default PostDetail;