import { createContext, useContext, useState } from "react";
import { initialPosts } from "../data/posts";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (post) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...post,
        id: Date.now(),
      },
    ]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}