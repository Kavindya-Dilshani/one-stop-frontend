
import { useAuth } from '../../utilities/auth/AuthContext';


export const Profile = () => {
  const {  logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
