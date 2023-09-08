// import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProp {
    item: TaskItem;
    deleteTask: (task: TaskItem) => void;
}
const Task = (props: TaskProp) => {
   const {item, deleteTask } = props;
   
  return (
    <li>
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{item.title}</h2>
      <p className="text-sm text-slate-500">{item.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {item.description}
      </p>

      <button id="deleteTaskButton"
        type="submit"
        className="deleteTaskButton bg-slate-600 "
        onClick={() => deleteTask(item)}
      >
        Delete
      </button>

    </div>
    </li>
  );
};

export default Task;