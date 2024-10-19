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
           blue:{
            10:'#bec6fe',
            20:'#afe3f9',
            

           },

           pink:{
            10:'#f8a4f3',

           },

           violet:{
            10:'#ba71fe',
            

           },

           skin:{
            10:'#F9F1F0',
            20:'#FDE2CB',
            30:'#FFBE98',
           },

           shadow:{
            10: 'rgba(0, 0, 0, 0.45)'
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
