import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
           brown:{
            10:'#A77370',
            20:'#C87377',
            30:'#D38F8F',

           },

           orange:{
            10:'#F39883',
            20:'#F5AC95'

           },

           skin:{
            10:'#FEE6C4',
            20:'#FDE2CB',
            30:'#FFBE98',
           }


      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
export default config;
