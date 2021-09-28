import React from "react";

const Posts = ({ allPosts }) => {

  return (
    <div className="post-main-container">
      {allPosts.length
        ? allPosts.map((posts) => {

            return (
              <div key ={posts._id} className="post-card">
                <h3>{posts.title}</h3>
                <p>{posts.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Posts;
