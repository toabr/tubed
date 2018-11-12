import React from 'react';
import { NavLink } from "react-router-dom";

const NavBtn = function({title,icon,url}) {
  return (
    <NavLink className="nav-link" to={`/${url}`} activeClassName="active" >
      <button className="btn btn-menu" >
        <i className={`fa fa-${icon}`}></i>
      </button>
    </NavLink>
  );
}

export default function AppHeader() {
  return(
    <header id="header">
      <div className="container">
        <nav className="navbar justify-content-center">

          <ul className="navbar-nav">
            <li className="nav-item"><NavBtn title="Home" url="" icon="th" /></li>
            <li className="nav-item"><NavBtn title="Feed" url="category/New" icon="bars" /></li>
            <li className="nav-item"><NavBtn title="Find" url="find" icon="search" /></li>
          </ul>

        </nav>
      </div>
    </header>
  );
}
