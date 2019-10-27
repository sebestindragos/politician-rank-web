import React from "react";
import "./index.css";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
};

export default Router;
