import type { User } from "../types";

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

const Profile = ({ user, onLogout }: ProfileProps) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <br />
      <p>Email: {user.email}</p>
      <br />
      <p>Role: {user.role}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

export default Profile;
