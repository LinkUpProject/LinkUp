// 文章页面功能侧边栏（AI答疑 + 笔记）
"use client";
// 导入React
import React from "react";
// 导入全局状态管理
import { useSnapshot } from "valtio";
import { contentNavbarStore } from "../../store/contentNavbar";
import AIAnswer from "./AIAnswer";
import Note from "./Note";

export default function Navbar() {
  // 创建状态快照
  const contentNavbarSnapshot = useSnapshot(contentNavbarStore);
  const { navItems, showId } = contentNavbarSnapshot;

  return (
    <div className="fixed right-0 top-0 w-1/4 mt-4 flex flex-col h-screen bg-white z-50 ">
      <span className="isolate inline-flex w-fit rounded-xl shadow-sm mb-2">
        <button
          type="button"
          onClick={() => (contentNavbarStore.showId = 0)}
          className={`inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
            showId === 0 && "text-yellow-600"
          }`}
        >
          {navItems[0].name}
        </button>
        <button
          type="button"
          onClick={() => (contentNavbarStore.showId = 1)}
          className={`inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
            showId === 1 && "text-yellow-600"
          }`}
        >
          {navItems[1].name}
        </button>
      </span>
      <div className="h-full">{navItems[showId].id === 0 && <AIAnswer />}</div>
      <div className="h-full">{navItems[showId].id === 1 && <Note />}</div>
    </div>
  );
}
