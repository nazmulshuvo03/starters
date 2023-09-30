import { useContext } from "react";
import { MainContext } from "./providers/MainProvider";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useContext(MainContext);
  // console.log("theme: ", theme);

  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full  flex justify-center items-center text-3xl font-bold text-primary">
        Starter App
      </div>
    </div>
  );
}

export default App;
