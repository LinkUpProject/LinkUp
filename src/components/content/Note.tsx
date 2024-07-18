// 侧边栏笔记组件

// 导入React
import React from "react";
import { ImageList } from "./ImageList";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Editor from "@/components/Editor";
import { ImageProvider } from "@/context/ImageContext"
const imageListVariants = cva(cn("px-3 mt-2"), {
  variants: {
    bottomWithTags: {
      true: "mb-4",
      false: "mb-14",
    },
  },
});
export default function Note() {
  return (
    <ImageProvider>
      <div className="h-screen">
        <Editor />
        {/* <ImageList className={imageListVariants()} /> */}
        {/* <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
        ></textarea> */}
      </div>
    </ImageProvider>
  );
}
