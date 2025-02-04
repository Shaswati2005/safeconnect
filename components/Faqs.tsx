"use client"


import React, { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const Faqs: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4  w-[400px] lg:w-[800px] h-fit border text-lg text-wrap p-4 bg-pink-100 rounded-xl shadow-pink-100 ">
      <button className=" rounded-md cursor:pointer bg-pink-100  text-lg text-wrap " onClick={toggleAnswer}>
        {question}
      </button>
      {isOpen && (
        <div className="mt-2 bg-pink-100 rounded-md">
          <p className='text-wrap'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faqs;