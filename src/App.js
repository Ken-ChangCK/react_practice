import React, { useState } from "react";
import "./App.css";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

function App() {
  const [resource, setResource] = useState("users");
  return (
    <div className="App">
      <UserList />
      <div>
        <button
          onClick={e => {
            e.preventDefault();
            setResource("posts");
          }}
        >
          posts
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            setResource("todos");
          }}
        >
          todos
        </button>
        {/* {resource} */}
      </div>
      <ResourceList resource1={resource} />
    </div>
  );
}

export default App;
