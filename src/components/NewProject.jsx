import { useRef } from "react";
import Input from "./Input.jsx";

export function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
        
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="content">
      <menu>
        <li>
          <button className="cancel">Cancel</button>
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} lable="Title" />
        <Input ref={description} lable="Description" textarea />
        <Input type="date" ref={dueDate} lable="Due Date" />
      </div>
    </div>
  );
}
