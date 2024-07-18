// Roadmap 渲染组件
"use client";

// 导入React
import { useEffect, useState } from "react";
// 导入第三方库
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  MiniMap,
  Controls,
} from "@xyflow/react";
import { useSearchParams } from "next/navigation";
import { getRoadMap } from "../../api/roadmap";
import { processData } from "../../utils/roadmap";
// 导入样式
import "@xyflow/react/dist/style.css";
// 导入组件
import CustomNode from "./CustomNode";

// 定义节点类型
const nodeTypes = {
  custom: CustomNode,
};

// 主组件
export default function RoadmapComp() {
  const params = useSearchParams();
  const id = params.get("id");

  const [initNodes, setInitNodes] = useState<any>([]);
  const [initEdges, setInitEdges] = useState<any>([]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  // 获取数据并初始化节点和边
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRoadMap(id ?? "");

      const { initNodes, initEdges } = processData(data);
      setInitNodes(initNodes);
      setInitEdges(initEdges);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // 更新节点和边
  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges, setNodes, setEdges]);

  console.log("initNodes", initNodes);
  console.log("initEdges", initEdges);

  return (
    <>
      {initNodes.length > 0 && initEdges.length > 0 && (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodesDraggable={false}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls showInteractive={false} />
          <Background gap={12} size={1} />
        </ReactFlow>
      )}
    </>
  );
}