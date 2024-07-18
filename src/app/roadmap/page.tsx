// RoadMap 页面

import React from "react";
// 导入框架
import Layout from "../layout";
// 导入组件
import RoadmapComp from "../../components/roadmap/RoadmapComp";

export default function page() {
  return (
    <Layout>
      <div className="h-screen w-screen">
        <RoadmapComp />
      </div>
    </Layout>
  );
}
