import React from "react";
import { SinglePost } from ".";
import { Link } from "react-router-dom";

const Posts = ({ allPosts }) => {
  return (
    <div className="posts-main-container">
      {allPosts.length
        ? allPosts.map((post) => {
            console.log(post);
            return (
              <Link
                to={`/posts/${post._id}`}
                key={post._id}
                className="link-tag"
              >
                <SinglePost post={post} />
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
