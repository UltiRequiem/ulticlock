/** @jsx h */

import { confetti, h, render, tw, useState } from "./deps.ts";
import { Footer, OptionCheckbox } from "./components/mod.ts";
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

  return (
    <main
      class={tw
        `h-screen bg-purple-400 flex items-center justify-center flex-col font-bold text-center`}
    >
      <p class={tw`md:text-9xl text-5xl`}>{date.toLocaleTimeString()}</p>
      <p class={tw`md:text-6xl text-2xl`}>{humanDateFmt(date)}</p>

      <div class={tw`flex items-center m-4 gap-2`}>
        <OptionCheckbox
          text="Confetti"
          handler={() => setPushConfetti(!pushConfetti)}
          checked={pushConfetti}
        />
      </div>

      <Footer />
    </main>
  );
}

render(<App />, document.getElementById("root")!);
