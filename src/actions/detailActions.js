import axios from "axios";
import { gameDetailsUrl, gameScreenShotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  
  const detailData = await axios.get(gameDetailsUrl(id), {
    headers: {
      'Content-Type': 'application/json',
      'token':'Token efe72b3c598c4e689949cfbb0de1877a'
    }
  });
  const screenShotData = await axios.get(gameScreenShotUrl(id), {
    headers: {
      'Content-Type': 'application/json',
      'token':'Token efe72b3c598c4e689949cfbb0de1877a'
    }
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
