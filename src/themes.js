/* theme svg backgrounds */
import rosePetals from "./backgrounds/Rose-Petals.svg";
import liquidCheese from "./backgrounds/Liquid-Cheese.svg";
import colorfulStingrays from "./backgrounds/Colorful-Stingrays.svg";
import sunTornado from "./backgrounds/Sun-Tornado.svg";

const THEMES = [
  {
    svg: rosePetals,
    color: "#dd1188",
    textColor: "#fff",
    className: "rose-petals",
  },
  {
    svg: liquidCheese,
    color: "#FFCC00",
    textColor: "#000",
    className: "liquid-cheese",
  },
  {
    svg: colorfulStingrays,
    color: "#037B79",
    textColor: "#000",
    className: "colorful-stingrays",
  },
  {
    svg: sunTornado,
    color: "#EE5522",
    textColor: "#000",
    className: "sun-tornado",
  },
];

export default THEMES;
