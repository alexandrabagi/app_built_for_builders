import React from 'react';
import { NavLink } from 'react-router-dom';

import { faTh, faStream, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabbedBar = () => (
  <div className="bottom-toolbar">
    <nav>
      <ul>
        <NavLink exact to="/" activeClassName="selected">
          <li className="selected">
            <FontAwesomeIcon icon={faTh} size="2x" />
          </li>
        </NavLink>
        <NavLink to="/category" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faStream} size="2x" />
          </li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          </li>
        </NavLink>
      </ul>
    </nav>
  </div>
);