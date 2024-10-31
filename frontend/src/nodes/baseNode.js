// node.js

import { Handle, Position } from "reactflow";
import { ArrImportO, ArrExportO } from "lovedicons/dist/arrO";
import { ContDocumentTextO } from "lovedicons/dist/contO";
import { CommMessageText2O } from "lovedicons/dist/commO";
import { FormaLinkO } from "lovedicons/dist/formaO";

export const BaseNode = ({
  id,
  label,
  data,
  nodeType,
  handleType,
  currName,
  handleNameChange,
  valueType,
  handleTypeChange,
  options = ["Text", "File"],
}) => {
  const isSourceHandle = ["input", "llm", "text", "bool", "url"].includes(
    handleType
  );
  const isTargetHandle = ["output", "llm", "text", "bool", "url"].includes(
    handleType
  );

  const iconMap = {
    input: <ArrImportO className="-rotate-90 h-6 w-6" />,
    output: <ArrExportO className="rotate-90 h-6 w-6" />,
    llm: <ContDocumentTextO className="h-6 w-6" />,
    text: <CommMessageText2O className="h-6 w-6" />,
    url: <FormaLinkO className="h-6 w-6" />,
  };

  return (
    <main>
      {isSourceHandle && (
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-value`}
          style={{ background: "green", width: "8px", height: "8px" }}
        />
      )}
      <section className="w-full p-2 text-sm font-normal bg-white rounded-md shadow-md border-2 border-primary hover:animate-pulseBorder">
        <div className="pb-2">
          <label className="flex items-center">
            {iconMap[handleType]}
            <span className="px-2 py-1 text-base font-medium">{label}</span>
          </label>
        </div>
        {handleType === "llm" ? (
          <div className="label_input_div mb-1">This is a {label}</div>
        ) : handleType === "url" ? (
          <div className="label_input_div">
            <label className="mb-1">Url</label>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="p-1 border rounded-md outline-none"
            />
          </div>
        ) : (
          <>
            <div className="label_input_div">
              <label className="mb-1">Field Name</label>
              <input
                type="text"
                value={currName}
                onChange={handleNameChange}
                className="p-1 border rounded-md outline-none"
              />
            </div>
            <div className="label_input_div">
              <label className="mb-1">Field Type</label>
              <select
                value={valueType}
                onChange={handleTypeChange}
                className="w-full p-1 border rounded-md outline-none"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </section>
      {isTargetHandle && (
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-value`}
          style={{ background: "red", width: "8px", height: "8px" }}
        />
      )}
    </main>
  );
};
