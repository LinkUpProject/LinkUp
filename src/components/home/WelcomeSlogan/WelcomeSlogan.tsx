// 欢迎标语组件

// 导入React
import React from "react";
// 导入数据
import { indexWelcome } from "../../../data/indexWelcome";

export default function WelcomeSlogan() {
  const { slogan, desc_one, desc_two, desc_three } = indexWelcome;
  return (
    <div className="flex flex-col w-full">
      <span className="text-xl md:text-3xl">{slogan}</span>
      <span className="mt-4 text-2xl text-black">
        {desc_one}
        <span className="text-blue-500">{desc_two}</span>
      </span>
      <span className="mt-4 text-xl">{desc_three}</span>
    </div>
  );
}
