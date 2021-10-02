import React from "react";
import { useParams } from "react-router";
import { SinglePost } from ".";
import { Container } from 'semantic-ui-react'

const SinglePostPage = ({ allPosts }) => {
  const { postsId } = useParams();

  const myPost = allPosts.find((posts) => {
    if (posts._id === postsId) {
      return true;
    } else {
      return false;
    }
  });

  if (!myPost) {
    return (
      <div className="post-card">
        <h1>Post ID {postsId} not found</h1>
      </div>
    );
  }

  return (
    <div className="ui container">
      <SinglePost posts={myPost} />
    </div>
  );
};
export default SinglePostPage;
