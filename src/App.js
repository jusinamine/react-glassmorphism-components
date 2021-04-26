import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import THEMES from "./themes";

/* components */
import Home from "./Home";
import Calculator from "./components/calculator/Calculator";
import { arrowLeft } from "./icons";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const location = useLocation();

  return (
    <div
      style={{
        backgroundImage: `url('${THEMES[selectedTheme].svg}')`,
        backgroundColor: THEMES[selectedTheme].color,
        transitionDuration: "1s",
      }}
      className="App"
    >
      <div className="absolute-container">
        {location.pathname !== "/" && (
          <Link to="/">
            <div className="back-to-home">
              {arrowLeft(THEMES[selectedTheme].calculatorText, "icon")}
            </div>
          </Link>
        )}
        <div
          className="choose-theme"
          onClick={() =>
            setSelectedTheme(
              selectedTheme + 1 !== THEMES.length ? selectedTheme + 1 : 0
            )
          }
          style={{
            backgroundImage: `url('${THEMES[selectedTheme].svg}')`,
            borderColor: THEMES[selectedTheme].color,
          }}
        ></div>
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/calculator"
          render={() => (
            <Calculator
              textColor={THEMES[selectedTheme].calculatorText}
              activeButtonClass={THEMES[selectedTheme].className}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
