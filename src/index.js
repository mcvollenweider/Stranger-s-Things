import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Posts } from "./components";

const App = () => {
const [allPosts, setAllPosts] = useState([]);

const fetchAllPosts = async ()=>{
try {
  const{data}= await axios.get('https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts')

console.log(data)

setAllPosts(data)


}
catch(err){
  console.log(error)
}

}

useEffect(()=>{

fetchAllPosts()

},[])

return (
  <div id="App">
    <Header />
    <Posts allPosts={allPosts}/>
  </div>
);

};


ReactDOM.render(
<Router>
<App />
</Router>,
 document.getElementById("root"));
