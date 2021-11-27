import React from "react";
import ReactDom from "react-dom";
import { UserSearch } from "./Refs/UserSearch";
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App></App>, document.querySelector("#root"));
