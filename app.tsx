import React from "https://esm.sh/react@17.0.2";
import ReactDOM from "https://esm.sh/react-dom@17.0.2";

import { tw } from "https://esm.sh/twind";

const App = () => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <main
      className={tw`h-screen bg-purple-400 flex items-center justify-center flex-col`}
    >
      <p className={tw`font-bold text(center 5xl gray-800)`}>
        The current time is {date.toLocaleTimeString()}.
      </p>

      <footer className={tw`text-center text-gray-500 mt-10`}>
        <address>
          <a
            className={tw`text(gray-500 2xl) hover:text-blue-700`}
            href="https://ultirequiem.com"
          >
            Eliaz Bobadilla
          </a>
        </address>
      </footer>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
