import React, { useState } from "react"
import axios from "axios"
import "./commentCreate.css"

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div className="commentCreateContainer">
      <form onSubmit={onSubmit} className="commentCreateFormContainer">
        <div className="commentCreateForm">
          <label className="commentFormTitle">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="commentCreateInput"
            placeholder="Write Comment Here..."
          />
        </div>
        <button className="commentSubmitButton">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
