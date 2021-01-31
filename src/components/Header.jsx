import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav>
        <div class="container">

          <div>
            <ul>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/goal" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/goal">
                  Goal
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);