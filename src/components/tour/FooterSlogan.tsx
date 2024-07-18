// Footer Slogan 组件

// 导入数据
import React from "react";

interface QuestionData {
  description: string;
}

interface Props {
  questionData: QuestionData;
}

export default function FooterSlogan({ questionData }: Props) {
  return (
    <div>
      <span className="text-center">{questionData.description}</span>
    </div>
  );
}
