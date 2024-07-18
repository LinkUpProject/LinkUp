// FooterButtons.tsx

import React from "react";

interface FooterButtonsProps {
  index: number;
  totalQuestions: number;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({
  index,
  totalQuestions,
}) => {
  const handlePrevious = () => {
    const previousPath = `/tour/${["one", "two", "three", "four"][index - 1]}`;
    window.location.href = previousPath;
  };

  return (
    <div className="mt-10 flex justify-center space-x-4">
      {index > 0 && (
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          上一个问题
        </button>
      )}
      {index === totalQuestions - 1 ? (
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          完成
        </button>
      ) : null}
    </div>
  );
};

export default FooterButtons;
