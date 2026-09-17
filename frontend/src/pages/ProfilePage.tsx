import { useAuth } from "../hooks/useAuth";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const { user } = useAuth();
  if (!user) return null;

  return <Profile user={user} />;
};

export default ProfilePage;
