import type { User } from "../types";

interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <br />
      <p>Email: {user.email}</p>
      <br />
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Profile;
