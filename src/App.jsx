import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
