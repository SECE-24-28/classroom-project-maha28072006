import "./index.css";
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="page">
      <h2>Flexbox Cards Task</h2>

      <div className="card-container">

        <div className="card">
          <img src="/Tanjiro.jpg" />
          <h3>Card 1</h3>
          <p>This is a simple card using flex.</p>
          <button className="btn">View</button>
        </div>

        <div className="card">
          <img src="/Zenitsu.jpg" />
          <h3>Card 2</h3>
          <p>Practice creating layouts using Flexbox.</p>
          <button className="btn">View</button>
        </div>

        <div className="card">
          <img src="/Inosuke.jpg" />
          <h3>Card 3</h3>
          <p>Try adding more cards or changing the styles.</p>
          <button className="btn">View</button>
        </div>

      </div>
    </div>
  );
}

export default App;
