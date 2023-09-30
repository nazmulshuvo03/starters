import { useContext, useEffect } from "react";
import { MainContext } from "./providers/MainProvider";
import { WalletContext } from "./providers/WalletProvider";
import { AppStates } from "./constants/states";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  const { appState, updateAppState } = useContext(MainContext);
  const { isWalletConnected } = useContext(WalletContext);

  useEffect(() => {
    if (isWalletConnected) {
      updateAppState(AppStates.HOME);
    } else {
      updateAppState(AppStates.NOT_CONNECTED);
    }
  }, [isWalletConnected]);

  console.log(appState);

  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full">
        {appState === "NOT_CONNECTED" ? <Landing /> : <Home />}
      </div>
    </div>
  );
}

export default App;
