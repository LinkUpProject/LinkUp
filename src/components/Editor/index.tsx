import { createPlateEditor, Plate } from "@udecode/plate-common";
import { Editor } from "../plate-ui/editor";
// import { plugins } from "./plugins";
import { ImageProvider } from "@/context/ImageContext";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../plate-ui/button";
import { ImageList } from "../content/ImageList";

interface EditorProps {
  html?: string;
}

const PlateEditor: React.FC<EditorProps> = () => {
  // const [initialValue, setInitialValue] = useState<any[] | undefined>(
  //   undefined
  // );
  const [key, setKey] = useState(0);

  const editor = useMemo(() => createPlateEditor(), []);

  return (
    <div >
      <div className="mr-2">
        <Plate
          key={key}
          editor={editor}
          plugins={[]}
          // initialValue={initialValue}
        >
          <Editor placeholder="在这里写下有趣的内容..." />
        </Plate>
        <div className="flex justify-between items-center mt-2 w-full ">
          <div className="flex flex-col w-fit text-nowrap ">
            <span className="text-blue-600">上传图片？</span>
            <span className="text-gray-800">最多可以上传4张</span>
          </div>
          <ImageList />
        </div>
        <Button className="mt-4">记录此刻的想法</Button>
      </div>
    </div>
  );
};

export default PlateEditor;
