import { AppStates, LOCALSTORAGE_NAME } from "../constants/states";

export const checkAndGetLocalState = (state: AppStates) => {
  const currentState = localStorage.getItem(LOCALSTORAGE_NAME);
  if (!currentState) {
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
  }
  return currentState ? JSON.parse(currentState) : state;
};

export const updateLocalState = (state: AppStates) => {
  localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
};
