/** @jsx h */

import { h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import { tw } from "https://esm.sh/twind";
import { Footer } from "./components/mod.ts";
import { useInterval } from "./hooks/mod.ts";

const App = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <main
      class={tw
        `h-screen bg-purple-400 flex items-center justify-center flex-col`}
    >
      <p class={tw`font-bold text(center 7xl gray-800)`}>
        {date.toLocaleTimeString()}
      </p>
      <Footer />
    </main>
  );
};

render(<App />, document.getElementById("root")!);