import { FetchGet } from "./utils/FetchGet";
import { FetchPost } from "./utils/FetchPost";
import { URLS } from "./utils/URLS";

export const getGame = (id)  => {

  return FetchGet(`${URLS.getGame + id}`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getPlayersUsingId = (id)  => {

  return FetchGet(`${URLS.getPlayersUsingId + id}`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getMonsterUsingId = (id)  => {

  return FetchGet(`${URLS.getMonsterUsingId + id}`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getPlayersFromGame = async (id)  => {

  return FetchGet(`${URLS.getPlayersFromGame + id}/player`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const getMonsterFromGame = async (id)  => {

  return FetchGet(`${URLS.getMonsterFromGame + id}/monster`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}



export const getPlayerCards = async (id)  => {

return  FetchGet(`${URLS.getPlayerCards + id}/cards`)
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}
export const postCreateNewGame = (name)  => {

  return FetchPost(`${URLS.getGame}`, {name: name})
  .then(res => {      
    
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}

export const postNextTurn = async (id, cardId)  => {

  return FetchPost(`${URLS.getGame + id}/next-turn`, {card: cardId})
  .then(res => {      
    console.log(res)
    return res
  })
  .catch(err => {
    console.log(err)
    return []
  });
}
