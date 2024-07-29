import React from "react";
import Disc from "./Disc";
import { useDroppable } from "@dnd-kit/core";

const Bin = ({ id, discs, color, onAddDisc, onRemoveDisc }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div>
      <div className="bin" ref={setNodeRef} style={{ borderColor: color }}>
        <h3>{id}</h3>
        {discs &&
          discs.length > 0 &&
          discs.map((disc, index) => (
            <Disc key={index} color={color} id={`${id}-${index}`} />
          ))}
      </div>
      <div className="buttons flex justify-center">
        {onAddDisc && (
          <button
            className="w-10 h-10 bg-blue-400 border-2 border-blue-500"
            onClick={onAddDisc}
          >
            +
          </button>
        )}
        {onRemoveDisc && (
          <button
            className="w-10 h-10 border-2 bg-red-400 border-red-500"
            onClick={onRemoveDisc}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default Bin;
