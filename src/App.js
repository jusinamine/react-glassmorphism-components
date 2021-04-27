import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import THEMES from "./themes";

/* components */
import Home from "./Home";
import Calculator from "./components/calculator/Calculator";
import { arrowLeft } from "./icons";
import CreditCard from "./components/credit_card/CreditCard";

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
              {arrowLeft(THEMES[selectedTheme].textColor, "icon")}
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
        <Route
          exact
          path="/"
          render={() => <Home textColor={THEMES[selectedTheme].textColor} />}
        />
        <Route
          exact
          path="/calculator"
          render={() => (
            <Calculator
              textColor={THEMES[selectedTheme].textColor}
              activeButtonClass={THEMES[selectedTheme].className}
            />
          )}
        />
        <Route
          exact
          path="/credit-card"
          render={() => (
            <CreditCard textColor={THEMES[selectedTheme].textColor} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
