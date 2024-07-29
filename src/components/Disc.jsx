import React from "react";
import { useDraggable } from "@dnd-kit/core";

const Disc = ({ id, color }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    backgroundColor: color,
    border: "2px solid #333",
  };

  return (
    <div
      className="disc"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};

export default Disc;
