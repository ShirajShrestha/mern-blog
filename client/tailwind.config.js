/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");  this to code below
import {
  content as flowbiteContent,
  plugin as flowbitePlugin,
} from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite.content()
    flowbiteContent(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // flowbite.plugin()
    flowbitePlugin(),
  ],
};
