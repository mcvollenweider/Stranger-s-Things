import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Header, Posts, NavBar, Register, Login, NewPostForm, SinglePostPage } from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPosts = async () => {
    try {
      const myToken = getToken();

      if (myToken) {
        setIsLoggedIn(true);
      }

      const { data } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts",
        {
          headers: {
            "auth-token": myToken
          }
        }
      );
      setAllPosts(data.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    fetchAllPosts();
  }, []);

  return (
    <div id="App">
      <Header />
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/posts/:postsId">
            <SinglePostPage allPosts={allPosts} />
        </Route>
        <Route path="/posts">
          <Posts allPosts={allPosts} />
          <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts} />
        </Route>
      </Switch>
      <Route path="/posts/:postId">
        <SinglePostPage allPosts={allPosts} />
      </Route>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
