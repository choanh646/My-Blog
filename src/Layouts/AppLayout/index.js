import Header from "../../Components/Header";
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {styleAppLayoutLight, styleContentLight} from 'src/Themes/LightTheme'
import {styleAppLayoutDark, styleContentDark} from 'src/Themes/DarkTheme'

export default function AppLayout({ children,...props }) {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <div className="app__blog" style={theme === false ? styleAppLayoutLight : styleAppLayoutDark}>
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
