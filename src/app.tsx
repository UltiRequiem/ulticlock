/** @jsx h */

import { h, render, tw, useState } from "./deps.ts";
import { Footer } from "./components/mod.ts";
import { useInterval } from "./hooks/mod.ts";
import { dateFmt } from "./utils/mod.ts";

const App = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const text = tw`font-bold text(center 7xl gray-800)`;

  return (
    <main
      class={tw
        `h-screen bg-purple-400 flex items-center justify-center flex-col`}
    >
      <p class={text}>{date.toLocaleTimeString()}</p>
      <p class={text}>{dateFmt.format(date)}</p>

      <Footer />
    </main>
  );
};

render(<App />, document.getElementById("root")!);
