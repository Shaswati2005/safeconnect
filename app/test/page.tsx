"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

import { useState } from "react";

const page = () => {
  const [value, setValue] = useState("No data gotten");
  const [prompt, setPrompt] = useState("What are you");

  const getResponse = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate", {
        prompt,
      });
      setValue(response.data.response);
    } catch (error) {
      console.error(error);
    }

    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    setValue(result.response.text);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setPrompt(
            e.target.value +
              " Only give one word answer and the answer must be One of these two words , safe , unsafe "
          );
        }}
      ></input>
      <button onClick={getResponse} className="h-fit w-fit bg-blue-500 ">
        Fetch
      </button>
      <p>{value}</p>
    </div>
  );
};

export default page;
