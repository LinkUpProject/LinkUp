// 侧边栏笔记组件

// 导入React
import React from 'react'


export default function Note() {
  return (
    <div className="h-screen bg-red-300">
      <textarea
        className="textarea textarea-bordered"
        placeholder="Bio"
      ></textarea>
    </div>
  );
}
