import { proxy } from "valtio";

// 定义节点和边的类型
interface Node {
  id: string;
  type: string;
  data: any;
  position: { x: number; y: number };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
}

export const roadmapStore = proxy({
  // 解析前的原始数据
  PreanalyticData: [] as any[],
  // 解析后的节点数据
  initNodes: [] as Node[],
  // 解析后的边数据
  initEdges: [] as Edge[],
});
