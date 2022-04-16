/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, tw } from "../deps.ts";

export interface CheckboxProps {
  text: string;
  handler: () => void;
  checked: boolean;
}

export function OptionCheckbox({ text, handler, checked }: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        class={tw
          `w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
        checked={checked}
        onInput={handler}
      />
      <label
        for="checkbox-1"
        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </>
  );
}
