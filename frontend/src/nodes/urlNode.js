// inputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const UrlNode = ({ id, data }) => {
  const [currUrl, setCurrUrl] = useState(
    data?.urlName || id.replace("customInput-", "input_")
  );

  const handleNameChange = (e) => {
    setCurrUrl(e.target.value);
  };

  return (
    <main>
      <BaseNode
        id={id}
        data={data}
        label={"URL Loader"}
        handleType="url"
        currName={currUrl}
        handleNameChange={handleNameChange}
      />
    </main>
  );
};
