import React, { useState } from "react";
import axios from "axios";
import "./postCreate.css"

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div className="postCreateContainer">
      <h3 className="postCreateTitle">Create New Post</h3>
      <form onSubmit={onSubmit} className="postFormContainer">
        <div className="postForm">
          <label className="postTitleLabel">Title :</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="postTitleInput"
            placeholder="Write Post Title Here..."
          />
        </div>
        <button className="postSubmitButton">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
