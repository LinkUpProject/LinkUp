// 单节点组件

// 数据模型：
// completed：已完成
// proceed：进行中
// pending：未开始

// 导入React
import React, { memo } from "react";
// 导入第三方库
import { Handle, Position } from "@xyflow/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// 定义节点数据的类型

interface NodeData {
  contentId: string;
  emoji: string;
  name: string;
  isStart: string;
  progress?: string;
}

const CustomNode: React.FC<{ data: NodeData }> = ({ data }) => {
  const router = useRouter();
    const params = useSearchParams();
  // 携带id跳转
  const handleClick = async (link: string) => {
    try {
      const id = params.get("id");
      router.push(`/content?id=${link}&roadmap=${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const progressValue = parseInt(data.progress || "0", 10);
  const progressWidth = data.isStart ? progressValue : 0;
  const progressClass =
    progressValue === 100
      ? "border-green"
      : progressValue > 0
      ? "border-yellow"
      : "";
  return (
    <div className="relative px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-200 hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300 ease-in-out transform-gpu">
      {/* 进度条 */}
      {data.isStart && (
        <div className="absolute bottom-0 left-0 w-full h-1">
          <div
            className={`h-full ${progressClass}`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      )}
      {/* 添加节点链接 */}
      <button
        onClick={() => handleClick(data.contentId)}
        className="flex justify-center items-center"
      >
        {/* 添加节点图标 */}
        <div className="rounded-full w-12 h-12 flex justify-center items-center border border-gray-100">
          {data.emoji}
        </div>
        {/* 添加节点名称 */}
        <div className="min-w-[140px] max-w-[140px] ml-2">
          <div className="text-xl truncate">{data.name}</div>
        </div>
      </button>
      {/* 添加节点的输入和输出端口 */}
      <Handle
        type="target"
        position={Position.Top}
        className="bg-transparent -mt-2"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-transparent"
      />
    </div>
  );
};

export default memo(CustomNode);
