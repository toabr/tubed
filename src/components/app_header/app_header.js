import React from 'react';
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <React.Fragment>
      <div className="bg-color bg-danger">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link className="text-white" to="/">
              <div className="text-center mt-3">
                <h1 style={{display:'inline-block'}}>
                  <i className="fa fa-youtube mr-3"></i>
                  <span className="text-uppercase font-weight-bold text-white">Channel Watch</span>
                  <span className="badge text-white-50 pl-2">get your shit together</span>
                </h1>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color bg-danger sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-danger navbar-dark justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" to="/" activeClassName="">Feed</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/find" activeClassName="active">Find</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppHeader;
