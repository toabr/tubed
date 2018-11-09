import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBtn = function({title,icon,url}) {
  return (
    <NavLink className="nav-link" to={`/${url}`} activeClassName="active" >
    <div className="rounded py-1 px-3 shadow" >
      <div className="text-center" style={{lineHeight:'1',fontSize:'208%'}} ><i className={`fa fa-${icon}`}></i></div>
      {title}
    </div>
    </NavLink>
  );
}

export default function AppHeader() {
  return(
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar bg-dark navbar-dark justify-content-center" >

          <Link className="text-white" to="/">
            <h1 className="mr-3">
              <i className="fa fa-youtube mr-3"></i>
              <span className="text-uppercase font-weight-bold text-white">Telly</span>
            </h1>
          </Link>

          <ul className="navbar-nav sticky-top" style={{flexDirection:'row'}}>
            <li className="nav-item"><NavBtn title="Feed" url="" icon="bars" /></li>
            <li className="nav-item"><NavBtn title="Find" url="find" icon="search" /></li>
            <li className="nav-item"><NavBtn title="About" url="about" icon="info" /></li>
          </ul>

        </nav>
      </div>
    </div>
  );
}
