/** @jsx h */

import { confetti, h, render, tw, useState } from "./deps.ts";
import { Footer } from "./components/mod.ts";
import { useInterval } from "./hooks/mod.ts";
import { hourFmt, humanDateFmt } from "./utils/mod.ts";

function App() {
  const [date, setDate] = useState(new Date());
  const [pushConfetti, setPushConfetti] = useState(false);

  useInterval(() => {
    const newDate = new Date();

    document.title = `${hourFmt(newDate)} - UltiClock`;

    setDate(newDate);

    if (pushConfetti) {
      confetti();
    }
  }, 1000);

  console.log(pushConfetti);

  return (
    <main
      class={tw
        `h-screen bg-purple-400 flex items-center justify-center flex-col font-bold text-center`}
    >
      <p class={tw`md:text-9xl text-5xl`}>{date.toLocaleTimeString()}</p>
      <p class={tw`md:text-6xl text-2xl`}>{humanDateFmt(date)}</p>

      <label class={tw`m-3`}>
        <input
          type="checkbox"
          checked={pushConfetti}
          onInput={setPushConfetti}
        />
        Confetti
      </label>

      <Footer />
    </main>
  );
}

render(<App />, document.getElementById("root")!);
