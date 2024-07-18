// 文章页面侧边栏状态

import { proxy } from "valtio";

export const contentNavbarStore = proxy({
  navItems: [
    { id: "1", name: "AI答疑" },
    { id: "2", name: "笔记" },
  ],
  showId: "1",
  setShowId: (id: string) => {
    contentNavbarStore.showId = id;
  },
});
