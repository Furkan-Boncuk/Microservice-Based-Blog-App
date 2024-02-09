import React from "react";
import "./commentList.css"
const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li className="commentListItem" key={comment.id}>{content}</li>;
  });

  return <ul className="commentListContainer">{renderedComments}</ul>;
};

export default CommentList;
