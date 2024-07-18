"use client";
// 内容组件

// 导入React
import React, { useState, useEffect } from "react";
// 导入第三方库
import { useSearchParams } from "next/navigation";
import { getContent } from "../../api/content";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ScrollHighLight from "../scrollHighLight/ScrollHighLight";
import { Link } from "@nextui-org/react";
import { AnchorIcon } from "@/externalLink/AnchorIcon";

export default function Content() {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");
  const [data, setData] = useState<any>("");
  const [timer, setTimer] = useState(0);
  const [contentTime, setContentTime] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContent(id ?? "");
      setData(data);
      console.log(data);
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  useEffect(() => {
    let intervalId: any;
    let startTime: number;

    const startTimer = () => {
      startTime = Date.now();
      intervalId = setInterval(() => {
        setTimer(Math.floor((Date.now() - startTime) / 1000 / 60)); // 计算分钟并取整
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(intervalId);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        startTimer();
      } else {
        stopTimer();
      }
    });

    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (data.content) {
      const wordCount = data.content.split(" ").length;
      const minutes = Math.ceil(wordCount / 180);
      setContentTime(minutes);
    }
  }, [data.content]);

  const handleClick = async () => {
    try {
      const roadmapId = params.get("roadmap");
      router.push(`/roadmap?id=${roadmapId}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col  h-fit min-h-screen px-20">
      <div className="fixed top-0 inset-x-0 flex justify-between items-center w-3/4 px-10 pt-2 pb-1 h-fit rounded-xl bg-white/70 backdrop-blur-lg backdrop-saturate-150 z-50">
        <div className="flex gap-10 mt-2">
          <button className="" onClick={() => handleClick()}>
            <img src="/svg/fanhui.svg" alt="back" className="w-6" />
          </button>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{data.title}</span>
            <span className="mt-2 text-sm text-gray-800">
              最新更新时间：{dayjs(data.updatedAt).format("YYYY年MM月DD日")}
            </span>
          </div>
        </div>
        <div className="flex gap-10 mt-2">
          <div className="flex flex-col items-center">
            <span className="p-2 inline-flex items-center rounded-md bg-green-100 px-2 py-1 font-medium text-green-700">
              {Math.floor(contentTime)} 分钟
            </span>
            <span className="text-sm mt-2">预计时间</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-2 inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 font-medium text-yellow-800">
              {Math.floor(timer)} 分钟
            </span>
            <span className="text-sm mt-2">当前计时</span>
          </div>
        </div>
      </div>
      <div className="leading-relaxed tracking-wider text-xl pt-32 pb-20 px-10">
        <ScrollHighLight>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.content}
          </ReactMarkdown>
        </ScrollHighLight>
        <span className="ml-4 mt-4">原文链接及扩展：</span>
        <Link
          isExternal
          showAnchorIcon
          href={data.resource}
          className="mt-2 ml-2 text-purple-500"
          anchorIcon={<AnchorIcon />}
        >
          {data.title}
        </Link>
      </div>
    </div>
  );
}
