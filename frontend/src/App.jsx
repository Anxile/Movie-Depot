import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [isOnSearch, setIsOnSearch] = useState(false);

  return (
    <MovieProvider>
      <NavBar setIsOnSearch={setIsOnSearch} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home isOnSearch={isOnSearch} setIsOnSearch={setIsOnSearch} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
