import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import "./App.css"
const App = () => {
  return (
    <div className="appContainer">
      <h1 className="appTitle">Microservice Based Blog App</h1>
      <PostCreate />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
