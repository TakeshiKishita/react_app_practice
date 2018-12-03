import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import HelloWorld from "./HelloWorld";
import ArticleList from "./ArticleList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ background: "#55c500" }}>React App!</h1>
      <HelloWorld />
      <ArticleList />
      <Counter /> {/* <Counter></Counter> と同じ */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
