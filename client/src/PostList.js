import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import "./postList.css"

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts()
  }, [posts])

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="postListContainer"
        key={post.id}
      >
        <div className="postCard">
          <h3 className="postTitle">{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="postListContainer">
      {renderedPosts}
    </div>
  );
};

export default PostList;
