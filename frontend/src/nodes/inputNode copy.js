// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { ArrImportO } from "lovedicons/dist/arrO";
import { BaseNode } from "./baseNode";

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
    <BaseNode id={id} data={data} handleType="input">
      <section>
        <div className="p-2 bg-slate-200 rounded-md shadow-md shadow-purple-400">
          <label className="flex flex-col items-center justify-center">
            <ArrImportO className="-rotate-90 h-6 w-6" />
            <span className="px-2 py-1 text-sm font-medium">{data.label}</span>
          </label>
        </div>
      </section>
    </BaseNode>
  );
};

/*
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>Input</span>
      </div>
       <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div> 
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
*/
