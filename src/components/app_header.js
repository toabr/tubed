import React from 'react';
import { NavLink } from "react-router-dom";

const NavBtn = function({title,icon,url}) {
  return (
    <NavLink className="nav-link" to={`/${url}`} activeClassName="active" title={title}>
      <button className="btn btn-menu" >
        <i className={`fa fa-${icon}`}></i>
      </button>
    </NavLink>
  );
}

export default function AppHeader() {
  return(
    <header id="header">
      <div className="">

        <nav className="main navbar justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item"><NavBtn title="Home" url="" icon="th" /></li>
            <li className="nav-item"><NavBtn title="Categorys" url="categorys" icon="bars" /></li>
            <li className="nav-item"><NavBtn title="News-Feed" url="newsfeed" icon="feed" /></li>
            <li className="nav-item"><NavBtn title="Search" url="search" icon="search" /></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
