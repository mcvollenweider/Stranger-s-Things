import ReactDom from "react-dom";
import { Route, Switch, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <Link className="nav-bar-link" to="/posts">
        Posts
      </Link>

      <div className="auth-links">
        <Link className="nav-bar-link" to="/login">
          Login
        </Link>
        <Link className="nav-bar-link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
