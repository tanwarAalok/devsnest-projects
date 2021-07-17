import React, { useState } from "react";
import './App.css';
import Card from "./components/card";

const Food = ({index, food, setFood, foods}) => {
  return(
    <div className="main">
      {food}
      <button onClick={() => {
            console.log("Delete = " , food);
            const newFoods = foods.filter((el,i) => i !== index);
            setFood(newFoods);
      }}>Delete</button>
    </div>
  );
};

function App(props) {
  const [foods, setFood] = useState([
      <Card tittle="Pizza" calorie="60" />,
      <Card tittle="Burger" calorie="69" />,
      <Card tittle="Coke" calorie="600" />,
      <Card tittle="Browne" calorie="180" />,
      <Card tittle="Fried Rice" calorie="90" />,
      <Card tittle="Pani Puri" calorie="10" />,
      <Card tittle="Dosa" calorie="800" />,
      <Card tittle="Apple" calorie="50" />,
      <Card tittle="Rice" calorie="90" />,
      <Card tittle="Puri" calorie="10" />,
  ]);
  return (
    <div className="App">
      <h1 className="head">Calorie Counter</h1>
      <div className="container">
        {
          foods.map((food,index)=>(
            <Food key={index} food={food} foods={foods} setFood={setFood} index={index}/>
          ))
        }
      </div>

    </div>
  );
}

export default App;