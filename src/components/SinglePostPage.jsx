import React from "react";
import { useParams } from "react-router";
import { SinglePost } from ".";
import { deletePost, createMessages, getUserObject, getUserID } from "../api";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

const SinglePostPage = ({ allPosts }) => {
  const [message, setMessage] = useState("");
  const { postsId } = useParams();
  const [userId, setUserId] = useState("");
  let authorId;
  useEffect(() => {
    getUserObject()
      .then((x) => {
        setUserId(x.data._id);
      })
      .catch(console.error);
  }, []);

  const myPost = allPosts.find((posts) => {
    if (posts._id === postsId) {
      authorId = posts.author._id;
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

  const DeleteMe = ()=> {
    if (authorId === userId) {
    return (
      <button
        className="ui button"
        onClick={async () => {
          await deletePost(postsId);
        }}
      >
        Delete
      </button>
    );
  }
}
  return (
    <div className="ui container">
      <SinglePost posts={myPost} />
      <form
        id="newMessageSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { data } = await createMessages(postsId, message);
            alert("Your message has been sent!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="ui container">
          <label>
            Message:
            <input
              id="message"
              type="text"
              placeholder="Enter Message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></input>
          </label>
        </fieldset>
        <button className="ui button" typeof="submit">
          Submit Message
        </button>
      </form>
      <DeleteMe/>
    </div>
  );
};
export default SinglePostPage;
