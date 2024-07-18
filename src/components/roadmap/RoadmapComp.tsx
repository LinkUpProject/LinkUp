"use client";

// Import third-party libraries
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  MiniMap,
  Controls,
} from "@xyflow/react";
// Import styles
import "@xyflow/react/dist/style.css";
// Import components
import CustomNode from "./CustomNode";
// Import global state management
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getRoadMap } from "../../api/roadmap";
import { processData } from "../../utils/roadmap";

// Define node types
const nodeTypes = {
  custom: CustomNode,
};

export default function RoadmapComp() {
  // Get the parameter id
  const params = useSearchParams();
  const id = params.get("id");

  const [initNodes, setInitNodes] = useState<any>([]);
  const [initEdges, setInitEdges] = useState<any>([]);

  // Use useNodesState and useEdgesState to manage nodes and edges state
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRoadMap(id ?? "");
      // Process the data
      const { initNodes, initEdges } = processData(data);
      setInitNodes(initNodes);
      setInitEdges(initEdges);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges, setNodes, setEdges]);

  console.log("initNodes", initNodes);
  console.log("initEdges", initEdges);

  // Render the ReactFlow component
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
