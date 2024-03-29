import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/black-kit/assets/css/blk-design-system.min.css";
// import "../node_modules/black-kit/assets/css/nucleo-icons.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
