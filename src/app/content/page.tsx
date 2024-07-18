// 内容页面

// 导入React
import React from "react";
// 导入组件
import Content from "@/components/content/Content";
import Navbar from "@/components/content/Navbar";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="flex w-full h-full bg-white overflow-hidden">
      <div className="w-3/4 min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
      <div className="w-1/4 min-h-screen">
        <Navbar />
      </div>
    </div>
  );
}
