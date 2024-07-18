"use client";
// 引导页面

// 导入框架
import Layout from "../../layout";
// 导入组件
import Slogan from "../../../components/tour/Slogan";
import Select from "../../../components/tour/Select";
import FooterButtons from "../../../components/tour/FooterButton";
import FooterSlogan from "../../../components/tour/FooterSlogan";
// 导入数据
import { tourQuestions } from "../../../data/tourQuestion";

const mapping: { [key: string]: number } = {
  one: 0,
  two: 1,
  three: 2,
  four: 3,
};

const Page: React.FC<{ params: { sort: string } }> = ({ params }) => {
  // 根据 URL 参数 获取问题索引
  const index = params.sort in mapping ? mapping[params.sort] : -1;
  // 根据 问题索引 获取数据
  const questionData =
    index >= 0
      ? tourQuestions[index]
      : {
          id: -1,
          sort: "0",
          question: "问题未找到",
          description: "描述未找到",
        };
  return (
    <Layout>
      <div className="w-screen h-screen pt-10 bg-[#f7f9fe] overflow-hidden">
        <div className="flex flex-col max-w-[1000px] mx-auto">
          {/* Slogan 部分 */}
          <Slogan />
          <div className="mt-16 mx-auto">
            {/* 选项框 部分 */}
            <Select
              questionData={questionData}
              index={index}
              totalQuestions={tourQuestions.length}
            />
          </div>
          <div className="mt-14 mx-auto">
            {/* 底部Slogan 部分 */}
            <FooterSlogan questionData={questionData} />
          </div>
          <div className="mt-6 mx-auto">
            {/* 跳转按钮 部分 */}
            <FooterButtons
              index={index}
              totalQuestions={tourQuestions.length}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
