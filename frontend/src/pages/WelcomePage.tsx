import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const WelcomePage = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div>
      {mode === "login" ? <Login /> : <Signup />}

      {mode === "login" ? (
        <p>
          <button onClick={() => setMode("signup")}>signup</button>
        </p>
      ) : (
        <p>
          <button onClick={() => setMode("login")}>Login</button>
        </p>
      )}
    </div>
  );
};

export default WelcomePage;
