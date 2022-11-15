import PropTypes from "prop-types";

import MyTitle from "../components/user/MyTitle";
import LastListen from "../components/user/LastListen";
import Favoris from "../components/user/Favoris";
import "../style/User.css";
import Menu from "../components/Menu";

function User({ myLastListening }) {
  // const myLastListening = [
  //   {
  //     id: 17,
  //     pochette:
  //       "https://i.discogs.com/0GZUPBzIw4108MInwONdxiF0e8jkvWlB7X5UesdTOMU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzNTAx/My0xNDU2NjYyMDg3/LTY3MzYuanBlZw.jpeg",
  //     titre: "ghostbusters",
  //     artiste: "ray parker jr",
  //     date: "1984",
  //     genre: "film",
  //     mp3: "ghostbusters.mp3",
  //   },
  //   {
  //     id: 2,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/1e67034f2e56796abe33e4c8a33b64ed/264x264-000000-80-0-0.jpg",
  //     titre: "la terre est ronde",
  //     artiste: "orelsan",
  //     date: "2011",
  //     genre: "rap",
  //     mp3: "la_terre_est_ronde.mp3",
  //   },
  //   {
  //     id: 19,
  //     pochette:
  //       "https://i1.sndcdn.com/artworks-yMEOz1ewCyQNMsUe-cL525g-t500x500.jpg",
  //     titre: "the godfather",
  //     artiste: "love theme from",
  //     date: "1972",
  //     genre: "film",
  //     mp3: "love_theme_from.mp3",
  //   },
  //   {
  //     id: 4,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/ff5caf314549e1cff1960c5b2acfd384/264x264-000000-80-0-0.jpg",
  //     titre: "au dd",
  //     artiste: "pnl",
  //     date: "2019",
  //     genre: "rap",
  //     mp3: "au_dd.mp3",
  //   },
  //   {
  //     id: 5,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/d2cba0d91b2c02b7bd364186c4e64cf0/264x264-000000-80-0-0.jpg",
  //     titre: "life",
  //     artiste: "hamza",
  //     date: "2017",
  //     genre: "rap",
  //     mp3: "life.mp3",
  //   },
  // ];

  // const myFavoriteMusic = [
  //   {
  //     id: 6,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/e50540d7f752c93e0695ebae272be0c3/264x264-000000-80-0-0.jpg",
  //     titre: "faded",
  //     artiste: "alan walker",
  //     date: "2015",
  //     genre: "electro",
  //     mp3: "faded.mp3",
  //   },
  //   {
  //     id: 7,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/dc5cacfbaa2a9d8692f196c0b73fc879/264x264-000000-80-0-0.jpg",
  //     titre: "alone",
  //     artiste: "marshmello",
  //     date: "2016",
  //     genre: "electro",
  //     mp3: "alone.mp3",
  //   },
  //   {
  //     id: 8,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/1b43cadf09b492b3d0b26b2ab2f0db06/264x264-000000-80-0-0.jpg",
  //     titre: "animals",
  //     artiste: "martin garrix",
  //     date: "2013",
  //     genre: "electro",
  //     mp3: "animals.mp3",
  //   },
  //   {
  //     id: 9,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/af32df247aac316125d0f413c1819681/264x264-000000-80-0-0.jpg",
  //     titre: "unity",
  //     artiste: "thefatrat",
  //     date: "2015",
  //     genre: "electro",
  //     mp3: "unity.mp3",
  //   },
  //   {
  //     id: 10,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/544d04807869e82b2ecc943d006cf25c/264x264-000000-80-0-0.jpg",
  //     titre: "japan",
  //     artiste: "throttle",
  //     date: "2019",
  //     genre: "electro",
  //     mp3: "japan.mp3",
  //   },
  //   {
  //     id: 11,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/811d8289b9fb069e2db23ea6c2d4d3e2/264x264-000000-80-0-0.jpg",
  //     titre: "resonance",
  //     artiste: "home",
  //     date: "2014",
  //     genre: "electro",
  //     mp3: "resonance.mp3",
  //   },
  //   {
  //     id: 12,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/82c139e154a40073542914dfed468474/264x264-000000-80-0-0.jpg",
  //     titre: "turn down for what",
  //     artiste: "dj snake",
  //     date: "2013",
  //     genre: "electro",
  //     mp3: "turn_down_for_what.mp3",
  //   },
  //   {
  //     id: 13,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/264x264-000000-80-0-0.jpg",
  //     titre: "instant crush",
  //     artiste: "daft punk",
  //     date: "2014",
  //     genre: "electro",
  //     mp3: "instantCrush.mp3",
  //   },
  //   {
  //     id: 14,
  //     pochette:
  //       "https://e-cdn-images.dzcdn.net/images/cover/ec9a02f083f6d81102ec500553c1cdf0/264x264-000000-80-0-0.jpg",
  //     titre: "intoxicated",
  //     artiste: "martin solveig",
  //     date: "2015",
  //     genre: "electro",
  //     mp3: "intoxicated.mp3",
  //   },
  // ];

  return (
    <div className="pageUser">
      <Menu />
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
