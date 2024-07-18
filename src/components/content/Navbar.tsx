// 文章页面功能侧边栏（AI答疑 + 笔记）

// 导入React
import React from "react";
// 导入全局状态管理
import { useSnapshot } from "valtio";
import { contentNavbarStore } from "../../store/contentNavbar";

export default function Navbar() {
  // 创建状态快照
  const contentNavbarSnapshot = useSnapshot(contentNavbarStore);
  const { navItems, showId } = contentNavbarSnapshot;

  return (
      <div className="flex justify-center items-center gap-8 w-fit mx-auto mt-10 px-8 rounded-3xl bg-white/70  border border-gray-200 shadow-sm">
        {navItems.map((item) => (
          <button
            onClick={() => contentNavbarStore.setShowId(item.id)}
            className={`block py-2 text-center text-black relative ${
              showId === item.id
                ? "border-gradient text-yellow-500 drop-shadow-[0_0_16px_rgba(236,72,153,1)]"
                : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
  );
}
