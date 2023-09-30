import React, { createContext, ReactNode } from "react";
import tailwindConfig from "../../tailwind.config";

// Declare the context and its variable names with types
interface MainContextProps {
  theme: typeof tailwindConfig.theme;
}

// Create variable to hold the initial values
const initialMainContextValues: MainContextProps = {
  theme: tailwindConfig.theme?.extend,
};

const MainContext = createContext<MainContextProps>(initialMainContextValues);

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const theme = tailwindConfig.theme?.extend;

  // Define and Export the provider state variables here
  const contextValues = {
    theme,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
