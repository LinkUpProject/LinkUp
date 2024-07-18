// 文章页面功能侧边栏（AI答疑 + 笔记）
"use client";
// 导入React
import React from "react";
// 导入全局状态管理
import { useSnapshot } from "valtio";
import { contentNavbarStore } from "../../store/contentNavbar";
import AIAnswer from "./AIAnswer";

export default function Navbar() {
  // 创建状态快照
  const contentNavbarSnapshot = useSnapshot(contentNavbarStore);
  const { navItems, showId } = contentNavbarSnapshot;

  return (
    <div className="fixed right-0 top-0 w-1/4 flex flex-col h-screen bg-[#FFFCF1] z-50">
      <ul className="mt-2 menu rounded-box">
        <li>
          <details open>
            <summary
              onClick={() => (contentNavbarStore.showId = 0)}
              className="text-xl"
            >
              {navItems[showId].name}
            </summary>
            <ul>
              <li>
                <button onClick={() => (contentNavbarStore.showId = 0)}>
                  {navItems[0].name}
                </button>
              </li>
              <li>
                <button onClick={() => (contentNavbarStore.showId = 1)}>
                  {navItems[1].name}
                </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div className="h-full">{navItems[showId].id === 0 && <AIAnswer />}</div>
    </div>
  );
}
