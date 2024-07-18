// Select.tsx

import React from "react";
import { tourAnswerStore } from "../../store/tourAnswer";

interface QuestionData {
  id: number;
  sort: string;
  question: string;
  description: string;
}

interface SelectProps {
  questionData: QuestionData;
  index: number;
  totalQuestions: number;
}

const Select: React.FC<SelectProps> = ({
  questionData,
  index,
  totalQuestions,
}) => {
  const handleSelect = (answer: string) => {
    tourAnswerStore.answers[index] = {
      id: questionData.id,
      question: questionData.question,
      answer,
    };
    if (index < totalQuestions - 1) {
      const nextPath = `/tour/${["one", "two", "three", "four"][index + 1]}`;
      window.location.href = nextPath;
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <span className="text-xl py-1 px-2 bg-yellow-300/80 text-yellow-600 rounded-lg">
          {questionData.sort}
        </span>
        <span className="text-4xl tracking-widest leading-relaxed text-center">
          {questionData.question}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        <div
          className="flex justify-center items-center min-h-[250px] p-10 shadow-sm bg-white border border-yellow-300/80 rounded-xl"
          onClick={() => handleSelect("yes")}
        >
          <span className="text-2xl">是的 ！🚀</span>
        </div>

        <div
          className="flex justify-center items-center min-h-[250px] p-10 shadow-sm bg-white border border-yellow-300/80 rounded-xl"
          onClick={() => handleSelect("no")}
        >
          <span className="text-2xl">不是... 💭</span>
        </div>
      </div>
    </div>
  );
};

export default Select;
