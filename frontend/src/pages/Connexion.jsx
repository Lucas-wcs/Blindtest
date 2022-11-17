import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "../components/user/Login/Login";
import useToken from "../components/user/useToken";

function Connexion() {
  const { token, setToken } = useToken();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token]);
  return (
    <div className="wrapper">{!token && <Login setToken={setToken} />}</div>
  );
}

export default Connexion;
