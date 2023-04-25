import { Delete } from "@mui/icons-material";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
const Trashcan = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "trashcan",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <DndContext>
      <div ref={setNodeRef} style={style}>
        <Delete fontSize='large' />
      </div>
    </DndContext>
  );
};

export default Trashcan;
