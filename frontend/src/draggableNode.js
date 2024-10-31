// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} px-4 py-2 cursor-grab min-w-8 h-10 flex flex-col items-center justify-center rounded-md bg-primary`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      // style={{
      //   cursor: "grab",
      //   minWidth: "80px",
      //   height: "60px",
      //   display: "flex",
      //   alignItems: "center",
      //   borderRadius: "8px",
      //   backgroundColor: "#1C2536",
      //   justifyContent: "center",
      //   flexDirection: "column",
      // }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
