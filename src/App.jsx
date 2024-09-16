import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
