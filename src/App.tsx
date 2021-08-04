import React, { Fragment } from "react";
import { Home } from "./app/screens/Home";

/**
 Here authentication and route configuration can handle.
 */

function App() {
  return (
    <Fragment>
      <h1 style={{ marginLeft: "150px" }}>Welcome !</h1>
      <Home />
    </Fragment>
  );
}

export default App;
