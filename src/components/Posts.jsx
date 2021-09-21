import React from "react";

const Posts = (props) => {
  const { allPosts } = props;
  return (
    <div className="post-main-container">
      {allPosts.length
        ? allPosts.map((posts) => {
            console.log(posts);

            return (
              <div key ={_id} className="post-card">
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
