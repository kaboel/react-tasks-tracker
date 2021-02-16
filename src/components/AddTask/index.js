import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();

    if (!text || text == "") {
      console.log("Task required!");
    } else if (!day || day == "") {
      console.log("Day & Time required!");
    } else {
      onAdd({ text, day, reminder });

      setText("");
      setDay("");
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={submitTask}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Reminder</label>
        <input
          type="checkbox"
          name=""
          id="reminder"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
