import ReactDom from "react-dom";
import { Route, Switch, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="ui menu">
      <div className="item">
      <Link className="nav-bar-link" to="/posts">
        Posts
      </Link>
      </div>
      {isLoggedIn ? (
        <div className="item">
          <button className="ui button"
            onClick={() => {
              localStorage.clear();
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
        <div className="item">
          <Link className="nav-bar-link" to="/login">
            Login
          </Link>
          </div>
          
          <div className="item">
          <Link className="nav-bar-link" to="/register">
            Register
          </Link>
        </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
