// 主页
import React from "react";

// TODO：新老用户根据 localStorage 区分

// 导入框架
import Layout from "./layout";
// 导入组件
import WelcomeSlogan from "@/components/home/WelcomeSlogan/WelcomeSlogan";
import KnowledgeShow from "../components/knowledgeShow/KnowledgeShow";
import PersonalProgress from "../components/home/personalProgress/PersonalProgress";

export default function page() {
  return (
    <Layout>
      <div className="w-screen h-fit min-h-screen bg-[#FBF8F6]">
        <div className="flex w-full mx-auto pt-10">
          <div className="max-w-[900px] mx-auto">
            <WelcomeSlogan />
            <div className="mt-10">
              <PersonalProgress />
            </div>
            <KnowledgeShow />
          </div>
        </div>
      </div>
    </Layout>
  );
}
