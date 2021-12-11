//import styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  //Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
        // console.log(i);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId} onClick={exitDetailHandler}>
            <Stats>
              <motion.h3 layoutID={`title ${pathId}`}>{game.name}</motion.h3>
              <div className="flex-container">
                <div className="rating">
                  <p>Rating: {game.rating}</p>
                  {getStars()}
                </div>
                <Info>
                  <h3>Platforms:</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                      />
                    ))}
                  </Platforms>
                </Info>
              </div>
            </Stats>
            <Media>
              <motion.img
                layoutID={`image ${pathId}`}
                src={game.background_image}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  scrollbar-color: #ff7676 white;
  scrollbar-width: 0.5rem;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 1rem;
  background: whitesmoke;
  position: absolute;
  left: 5%;
  color: black;
  z-index: 10;
  pointer-events: none;

  img {
    width: 100%;
  }

  .flex-container {
    display: flex;
    width: 100%;
  }

  .rating {
    padding: 0 1rem;
    flex: 1;
    /* background: green; */
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: space-between; */
  /* background: blue; */
  img {
    height: 2rem;
    width: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background: blue; */
  h3 {
    margin: 0;
    padding: 0;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  img {
    margin-left: 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  padding: 5rem 0.5rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const Gallery = styled(motion.div)`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem; */
`;
export default GameDetail;
