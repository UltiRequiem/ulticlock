/** @jsx h */

import { h, render } from "https://esm.sh/preact";
import { useEffect, useRef, useState } from "https://esm.sh/preact/hooks";
import { tw } from "https://esm.sh/twind";
import { Footer } from "./components/Footer.tsx";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

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
