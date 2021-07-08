import Header from "../../Components/Header";
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
// f5c9b2,f0c5d5,8ac0de
export default function AppLayout({ children }) {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  const styleAppLayoutLight = {
    backgroundImage:
      "linear-gradient(to bottom right,#f5c9b2, #f0c5d5, #8ac0de)",
    height: "auto",
    padding: "50px 0",
  };
  const styleAppLayoutDark = {
    backgroundImage:
      "linear-gradient(to bottom right,#000, #363253, #ab6393, #9c8cdb)",
    minHeight: "auto",
    padding: "50px 0",
  };
  const styleContentLight = {
    width: "80%",
    margin: "auto",
    backgroundColor: "#fff",
  };
  const styleContentDark = {
    width: "80%",
    margin: "auto",
    backgroundColor: "#121212",
    color: "#fff",
  };

  const handleChangeTheme = () => {
    toggleTheme();
  };
  return (
    <div style={theme === false ? styleAppLayoutLight : styleAppLayoutDark}>
      <Paper
        elevation={2}
        style={theme === false ? styleContentLight : styleContentDark}
      >
        <Header theme={theme} handleChangeTheme={handleChangeTheme} />
        {children}
      </Paper>
    </div>
  );
}
