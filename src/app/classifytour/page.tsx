"use client";
// 导入React
import React, { useState } from "react";
// 导入第三方组件
import ClassifyHome from "@/components/classifyTour/ClassifyHome";

export default function page() {
  const categories = [
    { name: "编程", icon: "/svg/tour1.svg" },
    { name: "艺术&设计", icon: "/svg/tour2.svg" },
    { name: "社交方法", icon: "/svg/tour3.svg" },
    { name: "教育&学术", icon: "/svg/tour4.svg" },
    { name: "情感陪伴", icon: "/svg/tour5.svg" },
    { name: "复盘", icon: "/svg/tour6.svg" },
  ];
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (name: any) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name]
    );
  };

  const handleClick = () => {
    const nextPath = `/roadmap?id=e4398bd7-c91f-4f03-b2e4-26f5af2813a2`;
    window.location.href = nextPath;
  };

  return (
    <div className="max-w-[1000px] mx-auto py-[36px]">
      <ClassifyHome />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative flex flex-col justify-between h-[180px] p-4 rounded-lg  cursor-pointer transition-colors duration-300 ${
              selected.includes(category.name) ? "bg-teal-100" : "bg-[#F4F4F4]"
            }`}
            onClick={() => toggleSelect(category.name)}
          >
            <div className="mt-2 text-lg text-[#656565]">{category.name}</div>
            <div className="mt-2 text-xl">
              {selected.includes(category.name) ? "✔️" : "○"}
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={category.icon} alt={category.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-between items-center">
        <span className="text-xl text-[#C9AE7C] border border-[#FFDA89] py-3 pl-6 pr-24 rounded-3xl">
          或者试着写下你所想了解 or 感兴趣的方向呢~
        </span>
        <div className="flex ">
          <button
            onClick={() => handleClick()}
            className="px-6 py-2 bg-[#FDF4E0] text-[#D3B37C] font-bold rounded-lg mr-4 hover:bg-yellow-600 transition-colors duration-300"
          >
            进入
          </button>
          <button
            onClick={() => handleClick()}
            className="px-6 py-2 bg-white text-[#656565] rounded-lg  transition-colors duration-300"
          >
            跳过
          </button>
        </div>
      </div>
    </div>
  );
}
