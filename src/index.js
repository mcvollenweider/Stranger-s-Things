import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";
import 'semantic-ui-css/semantic.min.css'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Posts,
  NavBar,
  Register,
  Login,
  NewPostForm,
  SinglePostPage,
  SearchBar,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

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
            "auth-token": myToken,
          },
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

  useEffect(() => {
    const myFilteredPosts = allPosts.filter((posts) => {
      if (posts.title.includes(searchTerm)) {
        return true;
      }
      if (posts.description.includes(searchTerm)) {
        return true;
      }
      return false;
    });

    setFilteredPosts(myFilteredPosts);
  }, [searchTerm]);

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
          <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div>
            <Posts allPosts={allPosts} filteredPosts={filteredPosts} />
            <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts} />
          </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
