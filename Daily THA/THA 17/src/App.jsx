import React from "react";
import './App.css';
import Card from "./components/card";

function App(props) {
  return (
    <div className="App">
      <h1 className="head">Calorie Counter</h1>
      <div className="container">
        <Card tittle="Pizza" calorie="60" />
        <Card tittle="Burger" calorie="69" />
        <Card tittle="Coke" calorie="600" />
        <Card tittle="Browne" calorie="180" />
        <Card tittle="Fried Rice" calorie="90" />
        <Card tittle="Pani Puri" calorie="10" />
        <Card tittle="Dosa" calorie="800" />
        <Card tittle="Apple" calorie="50" />
        <Card tittle="Rice" calorie="90" />
        <Card tittle="Puri" calorie="10" />
      </div>

    </div>
  );
}

export default App;
