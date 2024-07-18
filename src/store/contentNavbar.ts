// 文章页面侧边栏状态

import { proxy } from "valtio";

export const contentNavbarStore = proxy({
  navItems: [
    { id: 0, name: "AI答疑助手" },
    { id: 1, name: "专属笔记" },
  ],
  showId: 0,
  setShowId: (id: number) => {
    contentNavbarStore.showId = id;
  },
});
