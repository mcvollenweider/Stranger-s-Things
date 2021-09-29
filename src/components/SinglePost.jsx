import React from "react";

const SinglePost = ({posts}) => {
  return (
    <div className="post-card">
      <h3>{posts.title}</h3>
      <p>{posts.description}</p>
    </div>
  );
};
export default SinglePost;
