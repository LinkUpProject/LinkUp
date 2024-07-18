// 滑动高亮组件

// 导入React
import React, { useRef, useEffect, useState, ReactNode } from "react";
// 导入样式
import "../../styles/globals.css";

// 定义组件的属性接口
interface HighlightWrapperProps {
  children: ReactNode;
}

// 定义滑动高亮组件
const ScrollHighLight: React.FC<HighlightWrapperProps> = ({ children }) => {
  // 创建一个引用，用于指向容器元素
  const containerRef = useRef<HTMLDivElement | null>(null);
  // 定义高亮样式状态
  const [highlightStyle, setHighlightStyle] = useState<{
    height: number;
    top: number;
  }>({ height: 0, top: 0 });

  // 使用副作用钩子，监听鼠标移动事件
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll<
          HTMLParagraphElement | HTMLSpanElement | HTMLLIElement
        >("p, span, li");
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
            setHighlightStyle({
              height: rect.height,
              top: rect.top - containerRef.current!.getBoundingClientRect().top,
            });
          }
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="highlight-box" style={highlightStyle}></div>
      <div className="prose mx-auto p-4">{children}</div>
    </div>
  );
};

export default ScrollHighLight;
