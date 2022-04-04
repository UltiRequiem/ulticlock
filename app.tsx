/** @jsx h */

import { h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import { tw } from "https://esm.sh/twind";

const App = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <main
      class={tw`h-screen bg-purple-400 flex items-center justify-center flex-col`}
    >
      <p class={tw`font-bold text(center 7xl gray-800)`}>
        {date.toLocaleTimeString()}
      </p>

      <footer class={tw`text(center gray-500) mt-10`}>
        <address>
          <a
            class={tw`text-2xl hover:text-blue-700`}
            href="https://ultirequiem.com"
          >
            Eliaz Bobadilla
          </a>
        </address>

        <a
          class={tw`hover:text-green-500 text-xl`}
          href="https://github.com/UltiRequiem/ulticlock"
        >
          Source Code
        </a>
      </footer>
    </main>
  );
};

render(<App />, document.getElementById("root")!);
