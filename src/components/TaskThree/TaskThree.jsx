import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Bin from "@/components/TaskThree/Bin";

export default function TaskThree() {
  const [createBinDiscs, setCreateBinDiscs] = useState([]);
  const [deleteBinDiscs, setDeleteBinDiscs] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      if (active.id.includes("create-bin") && over.id === "delete-bin") {
        setCreateBinDiscs((discs) =>
          discs.filter((_, index) => `create-bin-${index}` !== active.id)
        );
        setDeleteBinDiscs((discs) => [...discs, {}]);
      } else if (active.id.includes("delete-bin") && over.id === "create-bin") {
        setDeleteBinDiscs((discs) =>
          discs.filter((_, index) => `delete-bin-${index}` !== active.id)
        );
        setCreateBinDiscs((discs) => [...discs, {}]);
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="main w-full">
        <SortableContext
          items={
            createBinDiscs &&
            createBinDiscs.map((_, index) => `create-bin-${index}`)
          }
          strategy={rectSortingStrategy}
        >
          <Bin
            id="create-bin"
            discs={createBinDiscs && createBinDiscs}
            color="lightblue"
            onAddDisc={() => setCreateBinDiscs((discs) => [...discs, {}])}
          />
        </SortableContext>
        <SortableContext
          items={
            deleteBinDiscs &&
            deleteBinDiscs.map((_, index) => `delete-bin-${index}`)
          }
          strategy={rectSortingStrategy}
        >
          <Bin
            id="delete-bin"
            discs={deleteBinDiscs}
            color="lightcoral"
            onRemoveDisc={() =>
              setDeleteBinDiscs((discs) => discs.slice(0, -1))
            }
          />
        </SortableContext>
      </div>
    </DndContext>
  );
}
