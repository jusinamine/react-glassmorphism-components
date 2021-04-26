import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import "./list.css";

const List = ({ children }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      speed: 400,
      max: 15,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);
  return (
    <div ref={tilt} className="list">
      {children}
    </div>
  );
};

const ItemList = ({ children, link = undefined, textColor }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        if (link) history.push(link);
      }}
      className="item-list"
      style={{ color: textColor }}
    >
      {children}
    </div>
  );
};

List.ItemList = ItemList;

export default List;
