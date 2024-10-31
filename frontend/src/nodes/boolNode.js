// inputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const BoolNode = ({ id, data }) => {
  const [currBool, setCurrBool] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrBool(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <main>
      <BaseNode
        id={id}
        data={data}
        label={"Boolean"}
        handleType="bool"
        currName={currBool}
        handleNameChange={handleNameChange}
        valueType={inputType}
        handleTypeChange={handleTypeChange}
        options={["True", "False"]}
      />
    </main>
  );
};
