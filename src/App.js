import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.js";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState();

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );

  function handleAddActivity(newActivity) {
    setActivities({ newActivity, id: uid() });
  }
}

export default App;
