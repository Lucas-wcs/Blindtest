import Login from "../components/user/Login/Login";
import useToken from "../components/user/useToken";
import User from "./User";

function Connexion() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <User />
    </div>
  );
}

export default Connexion;
