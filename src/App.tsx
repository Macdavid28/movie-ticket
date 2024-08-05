import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth/page";
export const AppContext = createContext();
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <AppContext.Provider value={{ isDark, setIsDark }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/rated" element={<h1>Rated Page</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
