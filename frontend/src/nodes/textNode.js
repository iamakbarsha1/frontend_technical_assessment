// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <main>
      <BaseNode
        id={id}
        data={data}
        label={"Text"}
        handleType="text"
        currName={currText}
        handleNameChange={handleTextChange}
      />
    </main>
  );
};
