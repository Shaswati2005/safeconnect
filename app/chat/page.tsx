"use client";

import Chatbox from "@/components/ChatBox";
import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Msg {
  text: string;
  isBot: boolean;
  sender: string;
}

const Page = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [prompt, setPrompt] = useState<string>("");

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessages((prev) => [
      ...prev,
      { text: prompt, isBot: false, sender: "user" },
    ]);

    const result = await model.generateContent(prompt);

    console.log(messages);

    setMessages((prev) => [
      ...prev,
      { text: result.response.text(), isBot: true, sender: "bot" },
    ]);
    console.log(messages);
    setPrompt("");
  };

  return (
    <div className="h-dvh w-dvw flex items-start justify-center bg-pink-200">
      <form
        onSubmit={handleSubmit}
        className="h-dvh w-full md:w-[60%] flex flex-col items-center justify-start"
      >
        <Chatbox messages={messages} />
        <div className="flex-1 bg-blue-400 w-full flex justify-around items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            className="w-3/4 h-[50px]"
          ></input>
          <button type="submit">
            <FaPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
