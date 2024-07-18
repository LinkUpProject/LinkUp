// global.d.ts
declare module "*.svg" {
  const value: string;
  export = value;
}
declare module "*.webp" {
  const value: string;
  export = value;
}
declare module "*.avif" {
  const value: string;
  export = value;
}
declare module "*.md" {
  const value: string;
  export = value;
}
declare module "*.json" {
  const value: any;
  export = value;
}
// 打赏组件 - 石蒜模拟器
declare module "sakana" {
  const value: any;
  export = value;
}


// 404页面Link
interface NotFoundLink {
  name: string;
  href: string;
  description: string;
  icon: any;
}
// DataNode Roadmap数据生成定义
interface DataNode {
  id: string;
  type: string;
  data: {
    name: string;
    link: string;
    emoji: string;
    isStart?: string;
    progress?: string;
  };
  children?: DataNode[];
  position?: {
    x: number;
    y: number;
  };
}
type Node = {
  id: string;
  position?: { x: number; y: number };
  children?: Node[];
};

type Edge = {
  id: string;
  type: string;
  source: string;
  target: string;
  markerEnd: { type: string; width: number; height: number; color: string };
  animated: boolean;
};

