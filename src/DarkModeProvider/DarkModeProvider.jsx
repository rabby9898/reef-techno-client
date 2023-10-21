import { createContext, useState } from "react";

export const ModeContext = createContext();
const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const modeInfo = { toggleDarkMode, isDarkMode, setIsDarkMode };
  return (
    <ModeContext.Provider value={modeInfo}>{children}</ModeContext.Provider>
  );
};

export default DarkModeProvider;
