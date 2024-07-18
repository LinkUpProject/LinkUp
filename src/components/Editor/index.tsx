import { createPlateEditor, Plate } from "@udecode/plate-common";
import { Editor } from "../plate-ui/editor";
// import { plugins } from "./plugins";
import { ImageProvider } from "@/context/ImageContext";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../plate-ui/button";
import { ImageList } from "../content/ImageList"

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
    <div className="p-1">
      <div className="mx-10">
        <Plate
          key={key}
          editor={editor}
          plugins={[]}
          // initialValue={initialValue}
        >
          <Editor placeholder="Typing something here..." />
        </Plate>
        <Button>记录此刻的想法</Button>
        <ImageList></ImageList>
      </div>
    </div>
  );
};

export default PlateEditor;
