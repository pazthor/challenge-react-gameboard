export const BASENAME_URL = 'http://game.bons.me/api';
export const URLS = {
  getGame: `${BASENAME_URL}/games/`,
  getPlayersUsingId:`${BASENAME_URL}/players/`,
  getMonsterUsingId:`${BASENAME_URL}/monsters`,
  getPlayersFromGame:`${BASENAME_URL}/games/`,
  getMonsterFromGame:`${BASENAME_URL}/games/`,
  getPlayerCards:`${BASENAME_URL}/playrs/`,
  postCreateNewGame:`${BASENAME_URL}/games/`,
  postNextTurn:`${BASENAME_URL}/games/`,
}