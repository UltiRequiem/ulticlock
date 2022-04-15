/** @jsx h */

import { h, tw } from "../deps.ts";

export function Footer() {
  const [personalSite, sourceCode] = [
    "https://ultirequiem.com",
    "https://github.com/UltiRequiem/ulticlock",
  ];

  return (
    <footer class={tw`text(center gray-500) mt-10`}>
      <address>
        <a class={tw`text-2xl hover:text-blue-700`} href={personalSite}>
          © Eliaz Bobadilla
        </a>
      </address>

      <a class={tw`hover:text-green-500 text-xl`} href={sourceCode}>
        Source Code
      </a>
    </footer>
  );
}
