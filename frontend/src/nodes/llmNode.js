// llmNode.js

import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} label={"LLM"} handleType="llm" />;
};
