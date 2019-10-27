import React from "react";
import "./index.css";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
