// store.js
import React, { createContext, useReducer } from "react";

const initialState = {
  player: {},
  monster: {},
  gameInfo: {},
  cardList: {},
};
const store = createContext(initialState);
const { Provider } = store;
const actions = {
  SET_PLAYER: "SET_PLAYER",
  SET_MONSTER: "SET_MONSTER",
  SET_GAME: "SET_GAME",
  SET_CARDLIST: "SET_CARDLIST",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_PLAYER:
      return { ...state, player: action.value };
    case actions.SET_MONSTER:
      return { ...state, monster: action.value };
    case actions.SET_GAME:
      return { ...state, gameInfo: action.value };
    case actions.SET_CARDLIST:
      return { ...state, cardList: action.value };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    player: state.player,
    monster: state.monster,
    gameInfo: state.gameInfo,
    setPlayer: (value) => {
      dispatch({ type: actions.SET_PLAYER, value });
    },
    setMonster: (value) => {
      dispatch({ type: actions.SET_MONSTER, value });
    },
    setGame: (value) => {
      dispatch({ type: actions.SET_GAME, value });
    },
    setCardList: (value) => {
      dispatch({ type: actions.SET_CARDLIST, value });
    },
    reset: () => {
      dispatch({ type: actions.RESET });
    },
  };
  return <Provider value={value}>{children}</Provider>;
};

export { store, StateProvider };
