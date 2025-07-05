import noProjectImage from "../assets/p.jpg";
import Button from "./Button.jsx";

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="no-div">
      <img src={noProjectImage} alt="An empty task list" />
      <h2 className="h2">No Project Selected</h2>
      <p className="p-noproject1">
        Select a project or get started with a new one
      </p>
      <p className="p-noproject2">
        <Button onClick={onStartAddProject} >Create new project</Button>
      </p>
    </div>
  );
}
