import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Categories extends Component {
  render() {
    return (
        <div>
          <div className="nav-scroller mb-3 px-3 border-bottom">
            <nav className="nav nav-underline justify-content-between">
              <Link className="nav-item nav-link link-body-emphasis" to="/">
                Latest
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/technology">
                Technology
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/general">
                General
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/business">
                Business
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/sports">
                Sports
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/science">
                Science
              </Link>
              <Link className="nav-item nav-link link-body-emphasis" to="/health">
                Health
              </Link>
            </nav>
          </div>
        </div>
    );
  }
}

export default Categories;
