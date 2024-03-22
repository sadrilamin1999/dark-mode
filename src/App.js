import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-screen h-screen ${darkMode && "dark"}`}>
      <Header darkMode={darkMode} onToggle={handleToggle} />
      <Hero />
    </div>
  );
};

export default App;
