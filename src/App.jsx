import { useAuth0 } from "@auth0/auth0-react";
import config from "../auth_config.json";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <button
        onClick={async () => {
          let aT = await getAccessTokenSilently();
          console.log(aT);
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
