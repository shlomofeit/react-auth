import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await signup({ username, email, password });
    if (ok) navigate("/profile");
  };

  return (
    <div className="login-logout-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
          required
        />
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email..."
          required
        />
        <label>password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password..."
          required
        />
        {error && <p>{error}</p>}
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
