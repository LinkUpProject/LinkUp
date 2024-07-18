"use client";

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
// 导入样式
import "@xyflow/react/dist/style.css";
// 导入组件
import CustomNode from "./CustomNode";
// 导入全局状态管理
import { useSnapshot } from "valtio";
import { roadmapStore } from "../../store/roadmap";

// 定义节点类型
const nodeTypes = {
  custom: CustomNode,
};

export default function RoadmapComp() {
  const roadmapSnapshot = useSnapshot(roadmapStore);

  // 将只读数组转换为可变数组
  const initNodes = roadmapSnapshot.initNodes.slice();
  const initEdges = roadmapSnapshot.initEdges.slice();

  // 使用 useNodesState 和 useEdgesState 管理节点和边的状态
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  // 渲染 ReactFlow 组件
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodesDraggable={false}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
    >
      {/* 右下角小地图 组件 */}
      <MiniMap />
      {/* 左下角控制栏 组件 */}
      <Controls showInteractive={false} />
      <Background gap={12} size={1} />
    </ReactFlow>
  );
}
