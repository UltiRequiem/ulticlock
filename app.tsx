import React, { useState } from "https://esm.sh/react@17.0.2";
import ReactDOM from "https://esm.sh/react-dom@17.0.2";

const App = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return <h1>{date.toLocaleTimeString()}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
