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

  return (
    <main
      class={tw
        `h-screen bg-purple-400 flex items-center justify-center flex-col font-bold text-center`}
    >
      <p class={tw`md:text-9xl text-5xl`}>{date.toLocaleTimeString()}</p>
      <p class={tw`md:text-6xl text-2xl`}>{humanDateFmt(date)}</p>

      <div class={tw`flex items-center m-4`}>
        <input
          type="checkbox"
          class={tw
            `w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          checked={pushConfetti}
          onInput={() => setPushConfetti(!pushConfetti)}
        />
        <label
          for="checkbox-1"
          class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Confetti
        </label>
      </div>

      <Footer />
    </main>
  );
}

render(<App />, document.getElementById("root")!);
