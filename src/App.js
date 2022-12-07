import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
