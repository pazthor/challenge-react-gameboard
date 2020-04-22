export const BASENAME_URL = 'http://game.bons.me/api';
export const URLS = {
  getGame: `${BASENAME_URL}/games/`,
  getPlayersFromGame:`${BASENAME_URL}/games/:idGame/player`,
  getMonsterFromGame:`${BASENAME_URL}/games/:idGame/monster`,
  getPlayersUsingId:`${BASENAME_URL}/players/`,
  getMonsterUsingId:`${BASENAME_URL}/monsters`,
  getPlayerCards:`${BASENAME_URL}/playrs/:id/cards`,
  postCreateNewGame:`${BASENAME_URL}/games`,
  postNextTurn:`${BASENAME_URL}/games/:gameId/next-turn`,
}