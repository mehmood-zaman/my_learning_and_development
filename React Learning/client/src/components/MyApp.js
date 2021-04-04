import React from "react";

const MyComponent = () => {
  var a = "";
  let source = false;

  test();
  var a = "Mehmood";
  function test() {
    console.log(a);
    if (a) {
      source =
        "https://www.upwork.com/profile-portraits/c1wsFkw3Kdvz-xFHKRZFc4YPvi46u0tui7QByLM9YSCP4joXAbgQtruRaXTTkbQ62-";
    } else {
      source = "hello";
    }
  }
  return <img src={source} alt={source}></img>;
};

export default MyComponent;
