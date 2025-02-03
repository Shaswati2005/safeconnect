import React, { useState } from 'react';

interface QuestionProps {
  question: string;
  options: string[];
}

const QuestionComponent: React.FC<QuestionProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 

  const handleOptionChange = (option: string) => {
    setSelectedOption(option); 
  };

  return (
    <div className="mb-4 p-4 border bg-pink-100 rounded-2xl hover:scale-105 transition-all max-w-[900px]">
      <p className="font-semibold text-lg text-pink-700  mb-2">{props.question}</p>
      <div className="space-y-2">
        {props.options.map((option) => (
          <div key={option} className="flex items-center">
            <input 
              type="radio" 
              id={`option-${option}`} 
              checked={selectedOption === option} 
              onChange={() => handleOptionChange(option)}
              className="w-4 h-4 border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`option-${option}`} className="ml-2 text-lg  font-medium text-pink-900 dark:text-gray-300">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;