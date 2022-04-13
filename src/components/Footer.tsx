/** @jsx h */

import { tw } from "https://esm.sh/twind";
import { h } from "https://esm.sh/preact";

export function Footer() {
  return (
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
  );
}
