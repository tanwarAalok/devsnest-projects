import React, { useState , useEffect} from "react";
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
  const [value, setValue] = useState([]);
  const [num, setNum] = useState([]);
  const [foods, setFood] = useState([]);

  return (
    <div className="App">
      <div className="inputs">
      <input placeholder="Item name" type="text" onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      />
      <input placeholder="Calorie amount" type="number" onChange={(e) => {
        setNum(e.target.value);
      }}
      num={num}
      />
      </div>
      <button onClick={() => {
        setFood([...foods, <Card tittle={value} calorie={num}/>]);
        setValue("");
        setNum("");
      }}
      >Add Item</button>
      {
        foods.map((food,index)=>(
          <Food key={index} food={food} foods={foods} setFood={setFood} index={index}/>
        ))
      }

    </div>
  );
}

export default App;