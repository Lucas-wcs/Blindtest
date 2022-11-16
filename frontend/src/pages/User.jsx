import PropTypes from "prop-types";

import MyTitle from "../components/user/MyTitle";
import LastListen from "../components/user/LastListen";
import Favoris from "../components/user/Favoris";
import "../style/User.css";

function User({ myLastListening }) {
  return (
    <div className="pageUser">
      <div className="blockMusic">
        <div className="titleAndLast">
          <div className="titleUser">
            <MyTitle />
          </div>

          <div className="lastListen">
            <LastListen lastEcoute={myLastListening} />
          </div>
        </div>

        <div className="pieceOfMusic">
          <Favoris fav={myLastListening} />
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  myLastListening: PropTypes.func.isRequired,
};

export default User;
