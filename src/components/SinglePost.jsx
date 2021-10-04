import React from "react";
import { Container, Button } from "semantic-ui-react";


const SinglePost = ({ posts }) => {
  return (
    <div className="ui container">
      <h3>{posts.title}</h3>
      <p>{posts.description}</p>
    </div>
  );
};
export default SinglePost;
