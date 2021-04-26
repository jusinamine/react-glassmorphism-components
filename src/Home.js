import React from "react";
import List from "./components/list/List";

const Home = () => {
  return (
    <List>
      <List.ItemList link="/calculator">Calculator</List.ItemList>
    </List>
  );
};

export default Home;
