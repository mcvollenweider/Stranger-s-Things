import React, { useState } from "react";
import { createPost } from "../api";
import { getToken, getUser } from "../auth";

const NewPostForm = ({setAllPosts, allPosts}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice]=useState("")
  return (
    <div className="new-post-component-main-container">
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const {data} = await createPost(title, description, price)
            setAllPosts([data.post, ...allPosts])
            console.log(data,"!!!!!!!!")

          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h2>Create Post</h2>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Price:</label>
          <input
            id="price"
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </fieldset>
        <button typeof="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
