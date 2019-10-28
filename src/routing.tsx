import React from "react";
import "./index.css";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import VotePage from "./pages/vote/vote.page";
import RegisterPage from "./pages/auth/register.page";
import LoginPage from "./pages/auth/login.page";
import ConfirmEmailPage from "./pages/auth/confirm.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/vote" exact component={VotePage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/confirm/:id" exact component={ConfirmEmailPage} />
    </BrowserRouter>
  );
};

export default Router;
