import React from "react";
import NavBar from "./navbar";

const DefaultLayout: React.FC = props => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="container-fluid">
        <div className="row">
          <div className="col-12">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
