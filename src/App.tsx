import React from "react";
import "./App.stylus";
import Router from "./routing";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
};

export default App;
