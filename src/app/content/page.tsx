// 内容页面
import React from "react";
import Content from "@/components/content/Content";
import Navbar from "@/components/content/Navbar";

export default function page() {
  return (
    <div className="flex w-full h-full bg-white overflow-hidden">
      <div className="w-3/4 min-h-screen">
        <Content />
      </div>
      <div className="w-1/4 min-h-screen bg-[#FFFCF1]">
        <Navbar />
      </div>
    </div>
  );
}
