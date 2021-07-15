import React from "react";
import './App.css';
import Card from "./components/card";

function App(props) {
  let arr = [];
  let row = [1,2];
  for(var i=1; i<=8; i++){
    arr.push(i);
  }
  return (
    <div className="App">
      <div className="container">
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
      </div>

    </div>
  );
}

export default App;
