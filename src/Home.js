import React from "react";
import List from "./components/list/List";

const Home = ({ textColor }) => {
  return (
    <List>
      <List.ItemList link="/calculator" textColor={textColor}>
        Calculator
      </List.ItemList>
    </List>
  );
};

export default Home;
