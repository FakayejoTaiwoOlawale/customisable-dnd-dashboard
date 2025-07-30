import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";



import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, type AnyActionArg } from "react";
import widgetsData from "../data/widgets";
import Widget from "./Widget";
import { callback } from "chart.js/helpers";



import {z} from zod;

type prop={
  id:string;
  title:string;
  description: string
}
   

function SortableItem({ id, title, description }: prop) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

    console.log(transform)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div

    //this is what makes us to be able to select the div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 shadow rounded-lg w-64"
    >
      <Widget title={title} description={description} />
    </div>
  );
}

export default function Dashboard() {
  const [widgets, setWidgets] = useState(widgetsData);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = widgets.findIndex((item) => item.id === active.id);
      const newIndex = widgets.findIndex((item) => item.id === over?.id);

      setWidgets((items) => arrayMove(items, oldIndex, newIndex));
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={widgets.map((w) => w.id)}
        strategy={horizontalListSortingStrategy}
      >
        {/* this is the styling for drag and drops */}
        <div className="grid grid-cols-3 gap-4">
          {widgets.map((widget) => (
            <SortableItem key={widget.id} id={widget.id} title={widget.title} description={widget.description} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}


function SortableItem({id,title,description}:prop){
  const {listeners,attributes,transform,transition}
}


//creating a drag and drop dashbboard
//first define the context

<DndContext>
  <SortableContext logic="verticalStrategy">
    <SortableItem item={}>

    </SortableItem>
  </SortableContext>
</DndContext>