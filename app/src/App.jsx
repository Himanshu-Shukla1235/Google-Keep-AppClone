import React from "react";

import "./App.css";
import Header from "./header";
import AddNote from "./addNote"

const App = () => {
  return (
    <>
      <Header></Header>
      <main className="main"> <AddNote></AddNote></main>
    </>
  );
};

export default App;
