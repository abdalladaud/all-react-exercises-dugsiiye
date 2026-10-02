import { useEffect, useState } from "react";

const FetchUserGitHub = () => {
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");
        setUser(null);

        const response = await fetch(
          `https://api.github.com/users/${search}`
        );

        if (!response.ok) {
          throw new Error("GitHub user not found");
        }

        const data = await response.json();

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [search]);

  return (
    <>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={() => setSearch(username)}>
        Search
      </button>

      {loading && <h6>Loading...</h6>}

      {error && (
        <h5 style={{ color: "red" }}>
          Error: {error}
        </h5>
      )}

      {user && (
        <div style={{ marginTop: "20px" }}>
            <h2>{user.name}</h2>
            <img
                src={user.avatar_url}
                alt={user.login}
                width="150"
                className="profile"
            />

          <p>
            <strong>Username:</strong> {user.login}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {user.location || "N/A"}
          </p>

          <p>
            <strong>Public Repos:</strong>{" "}
            {user.public_repos}
          </p>
        </div>
      )}
    </>
  );
};

export default FetchUserGitHub;