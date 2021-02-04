//Base URL
const base_url = "https://api.rawg.io/api/";
const API_KEY = "9fb574b8e2624a61973a54df2917f8bc";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//console.log(currentDate);

//Popular Games
const popularGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;
//Game Screenshots
export const gameScreenShotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
//Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=9`;
