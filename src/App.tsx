import Navbar from "./components/Navbar";

function App() {
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
