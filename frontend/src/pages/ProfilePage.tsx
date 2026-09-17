import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const handleLogout = async () => {
    await logout();
    nav("/");
  };
  if (!user) return null;

  return <Profile user={user} onLogout={handleLogout} />;
};

export default ProfilePage;
