import React, { createContext, ReactNode, useEffect, useState } from "react";
import tailwindConfig from "../../tailwind.config";
import { AppStates } from "../constants/states";
import { checkAndGetLocalState, updateLocalState } from "../functions/state";

// Declare the context and its variable names with types
interface MainContextProps {
  theme: typeof tailwindConfig.theme;
  appState: AppStates;
  updateAppState: (state: AppStates) => void;
}

// Create variable to hold the initial values
const initialMainContextValues: MainContextProps = {
  theme: tailwindConfig.theme?.extend,
  appState: AppStates.NOT_CONNECTED,
  updateAppState: () => {},
};

const MainContext = createContext<MainContextProps>(initialMainContextValues);

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const theme = tailwindConfig.theme?.extend;
  const [appState, setAppState] = useState<AppStates>(AppStates.NOT_CONNECTED);

  useEffect(() => {
    const currentState: AppStates = checkAndGetLocalState(
      AppStates.NOT_CONNECTED
    );
    setAppState(currentState);
  }, []);

  const updateAppState = (state: AppStates) => {
    setAppState(state);
    updateLocalState(state);
  };

  // Define and Export the provider state variables here
  const contextValues = {
    theme,
    appState,
    updateAppState,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
