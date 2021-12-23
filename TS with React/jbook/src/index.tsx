import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import * as esBuild from "esbuild-wasm";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const submit = () => {};

  useEffect(() => {
    startServer();
  }, []);

  const startServer = async () => {
    const service = await esBuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
    console.log(service);
  };
  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)}></textarea>
      <div>
        <button onClick={submit}> Submit</button>
      </div>

      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
