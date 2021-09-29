import React from "react";

const SinglePost = ({ post }) => {
  return (
    <div key={post._id} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};
export default SinglePost;
