import React, { useState, useEffect } from "react";
import { getUserObject } from "../api";
const UserPage = () => {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getUserObject()
      .then((x) => {
        setUsername(x.data.username);
        setPosts(x.data.posts);
        setMessages(x.data.messages);
      })
      .catch(console.error);
  }, []);
  let post = "";
  let message = "";
  posts.forEach((x) => {
    if (x === posts[posts.length - 1]) {
      post = post + x.title;
    } else {
      post = post + x.title + ", ";
    }
  });
  messages.forEach((x) => {
    if (x === messages[messages.length - 1]) {
      message = message + `"${x.content}"` + " sent to " + x.post.title;
    } else {
      message = message + `"${x.content}"` + " sent to " + x.post.title + ", ";
    }
  });
  return (
    <div className="user">
      <h1>Username: {username}</h1>
      <h1>Posts: {post}</h1>
      <h1>Messages: {message}</h1>
    </div>
  );
};
export default UserPage;
