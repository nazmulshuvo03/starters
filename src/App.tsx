import { useContext } from "react";
import { MainContext } from "./providers/MainProvider";

function App() {
  const { theme } = useContext(MainContext);
  console.log("theme: ", theme);

  return (
    <div className="text-3xl font-bold underline text-primary">Starter App</div>
  );
}

export default App;
