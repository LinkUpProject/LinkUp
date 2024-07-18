// 分类引导页面
import React from "react";

export default function ClassifyHome() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <span className="text-2xl">您好！</span>
        <span className="text-[#FFBD3D] text-2xl">绝不秃头～</span>
      </div>
      <span className="text-2xl font-bold">
        我是 LinkUP，你的智能助手，让我们一起UPUP！
      </span>
      <span className="text-2xl font-bold">
        在开始之前，不妨告诉我你感兴趣的领域！
      </span>
      <span className="text-base text-[#BBBBBB]">
        花一分钟帮我更好的了解你，让我更好的为你服务。
      </span>
    </div>
  );
}
