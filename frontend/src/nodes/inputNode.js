// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { ArrImportO } from "lovedicons/dist/arrO";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <main>
      <BaseNode
        id={id}
        data={data}
        label={"Input"}
        handleType="input"
        // Handle={Handle}
        // Position={Position}
        currName={currName}
        handleNameChange={handleNameChange}
        valueType={inputType}
        handleTypeChange={handleTypeChange}
        options={["Text", "File"]}
      />
    </main>
  );
};
