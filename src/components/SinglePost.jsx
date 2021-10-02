import React from "react";
import { Container } from 'semantic-ui-react'

const SinglePost = ({ posts }) => {
  // const [isAuthor, setIsAuthor] = useState(false);

  return (
    <div className="ui container">
      <h3>{posts.title}</h3>
      <p>{posts.description}</p>
      {/* <button onClick={this.sayHello}>
      Delete
    </button> */}
    </div>
  );
};
export default SinglePost;
