import { createPlateEditor, Plate } from "@udecode/plate-common";
import { Editor } from "../plate-ui/editor";
// import { plugins } from "./plugins";
import { ImageProvider } from "@/context/ImageContext";
import { useEffect, useMemo, useState } from "react";

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
      <div className="mx-10 h-full">
        <Plate
          key={key}
          editor={editor}
          plugins={[]}
          // initialValue={initialValue}
        >
          <Editor placeholder="Typing something here..." />
        </Plate>
      </div>
    </div>
  );
};

export default PlateEditor;
