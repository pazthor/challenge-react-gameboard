import { FetchGet } from "./utils/FetchGet";
import { FetchPost } from "./utils/FetchPost";
import { URLS } from "./utils/URLS";

export const getGame = (id)  => {

  FetchGet(`${URLS.getGame + id}`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getPlayersUsingId = (id)  => {

  FetchGet(`${URLS.getPlayersUsingId + id}`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getMonsterUsingId = (id)  => {

  FetchGet(`${URLS.getMonsterUsingId + id}`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getPlayersFromGame = (id)  => {

  FetchGet(`${URLS.getPlayersFromGame + id}/player`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getMonsterFromGame = (id)  => {

  FetchGet(`${URLS.getMonsterFromGame + id}/monster`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}



export const getPlayerCards = (id)  => {

  FetchGet(`${URLS.getGame + id}/cards`)
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}
export const postCreateNewGame = (name)  => {

  FetchPost(`${URLS.getGame}`, {name: name})
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const postNextTurn = (id, cardId)  => {

  FetchPost(`${URLS.getGame + id}/next-turn`, {card: cardId})
  .then(res => {      
    console.log(res.data);
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}
