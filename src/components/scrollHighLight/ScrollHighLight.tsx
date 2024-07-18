import React, { useRef, useEffect, useState, ReactNode } from "react";
import "../../styles/globals.css";

interface HighlightWrapperProps {
  children: ReactNode;
}

const ScrollHighLight: React.FC<HighlightWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [highlightStyle, setHighlightStyle] = useState<{
    height: number;
    top: number;
  }>({ height: 0, top: 0 });

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
