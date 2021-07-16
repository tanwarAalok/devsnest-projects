import React, { Component } from "react";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0
    }
  }
  increament1 = () => {
    this.setState({count1: this.state.count1 + 1})
  }
  increament2 = () => {
    this.setState({count2: this.state.count2 + 1})
  }
  increament3 = () => {
    this.setState({count3: this.state.count3 + 1})
  }
  increament4 = () => {
    this.setState({count4: this.state.count4 + 1})
  }
  render(){
    return(
      <div className="container">
        <button onClick={this.increament1} className="counter">{this.state.count1}</button>
        <button onClick={this.increament2} className="counter">{this.state.count2}</button>
        <button onClick={this.increament3} className="counter">{this.state.count3}</button>
        <button onClick={this.increament4} className="counter">{this.state.count4}</button>
      </div>
    )
  }
}

export default App;
