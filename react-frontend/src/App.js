import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Guru BBQ</h1>
        <h3>
          <button className="buttons">Smokers</button>{" "}
          <button className="buttons">Meats</button>{" "}
          <button className="buttons">Rubs / Sauces</button>{" "}
        </h3>
      </div>
    );
  }
}

export default App;
