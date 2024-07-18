"use client";
// 全部分类组件
import React from "react";
// 导入数据
import { knowledgeClassify } from "../../data/knowledgeClassify";
import { useRouter } from "next/navigation";

export default function KnowledgeShow() {
  const router = useRouter();
  // 携带id跳转
  const handleClick = async (link: string) => {
    try {
      router.push(`/roadmap?id=${link}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full mx-auto px-4 lg:px-8">
      <div className="pb-24 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
        {knowledgeClassify.map((item: any) => (
          <button
            onClick={() => handleClick(item.link)}
            key={item.name}
            className="mt-10 group overflow-hidden rounded-xl border border-gray-200 hover:border-yellow-500 hover:shadow-lg transition duration-300 ease-in-out transform-gpu"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <img
                src={item.icon}
                alt={item.name}
                className="h-12 w-12 p-2 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
              />
              <div className="text-lg font-medium leading-6 text-gray-900 group-hover:text-sun transition duration-300 ease-in-out transform-gpu">
                {item.name}
              </div>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-white">
              <div className="flex justify-between gap-x-4 py-3 ">
                <span>{item.desc}</span>
              </div>
            </dl>
          </button>
        ))}
      </div>
    </div>
  );
}
