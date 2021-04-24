import "./App.css";
import Calculator from "./components/calculator/Calculator";
import rosePetals from "./backgrounds/Rose-Petals.svg";
import liquidCheese from "./backgrounds/Liquid-Cheese.svg";
import colorfulStingrays from "./backgrounds/Colorful-Stingrays.svg";
import sunTornado from "./backgrounds/Sun-Tornado.svg";

import { useState } from "react";

function App() {
  const THEMES = [
    {
      svg: rosePetals,
      color: "#dd1188",
      calculatorText: "#fff",
      className: "rose-petals",
    },
    {
      svg: liquidCheese,
      color: "#FFCC00",
      calculatorText: "#000",
      className: "liquid-cheese",
    },
    {
      svg: colorfulStingrays,
      color: "#037B79",
      calculatorText: "#000",
      className: "colorful-stingrays",
    },
    {
      svg: sunTornado,
      color: "#EE5522",
      calculatorText: "#000",
      className: "sun-tornado",
    },
  ];
  const [selectedTheme, setSelectedTheme] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url('${THEMES[selectedTheme].svg}')`,
        backgroundColor: THEMES[selectedTheme].color,
        transitionDuration: "1s",
      }}
      className="App"
    >
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
      <Calculator
        textColor={THEMES[selectedTheme].calculatorText}
        activeButtonClass={THEMES[selectedTheme].className}
      />
    </div>
  );
}

export default App;
