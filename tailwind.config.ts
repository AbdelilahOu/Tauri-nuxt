import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "app.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};
