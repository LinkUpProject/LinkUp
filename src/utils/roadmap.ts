

export function processData(data: any) {
  function calculatePositions(node: any, x = 0, y = 0, level = 0) {
    if (!node.position) {
      node.position = { x, y };
    }

    if (!node.children || node.children.length === 0) return;

    const children = node.children;
    const offset = 400; // 每个一级子标题的水平偏移量
    const verticalOffset = 150; // 垂直偏移量
    const childCount = children.length;
    const totalWidth = offset * (childCount - 1);

    const startX = node.position.x - totalWidth / 2;
    let currentY = node.position.y + verticalOffset;

    for (let i = 0; i < childCount; i++) {
      const child = children[i];

      if (!child.position) {
        if (level === 0) {
          child.position = {
            x: startX + i * offset,
            y: node.position.y + verticalOffset,
          };
        } else if (level === 1) {
          child.position = { x: node.position.x, y: currentY };
          currentY += verticalOffset;
        } else if (level === 2) {
          child.position = {
            x: node.position.x + offset / 2,
            y: currentY - 20,
          };
          currentY += verticalOffset;
        }
      }
      if (child.position) {
        calculatePositions(
          child,
          child.position.x,
          child.position.y,
          level + 1
        );
      }
    }
  }

  calculatePositions(data);

  function flattenNodes(node: any, result: any[] = []) {
    const { children, ...rest } = node;
    result.push(rest);
    if (children) {
      children.forEach((child: any) => flattenNodes(child, result));
    }
    return result;
  }

  const nodes = flattenNodes(data);
  console.log("Flattened nodes:", nodes);

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

  function createEdges(node: Node, result: Edge[] = []): Edge[] {
    if (node.children) {
      node.children.forEach((child: Node) => {
        if (child.position) {
          result.push({
            id: `e${node.id}-${child.id}`,
            type: "straight",
            source: node.id,
            target: child.id,
            markerEnd: {
              type: "ArrowClosed",
              width: 20,
              height: 20,
              color: "#ff7c7c",
            },
            animated: true,
          });
        }
        createEdges(child, result);
      });
    }
    return result;
  }

  const edges = createEdges(data);
  console.log("Created edges:", edges);
  const initNodes = nodes
  const initEdges = edges

  return { initNodes, initEdges };
}
