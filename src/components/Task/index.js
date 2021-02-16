import { FaTrash } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const numberStyle = {
    color: "#aaa",
    fontStyle: "italic",
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5 style={numberStyle}>{`# ${task.id}`}</h5>
      <h3>
        {task.text}
        <FaTrash style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
