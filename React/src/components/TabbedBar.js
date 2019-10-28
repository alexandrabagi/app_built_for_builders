import React from 'react';
import { NavLink } from 'react-router-dom';

import { faClock, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabbedBar = () => (
  <div className="bottom-toolbar">
    <nav>
      <ul>
<<<<<<< HEAD
        <NavLink to="/category" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </li>
        </NavLink>
        <NavLink exact to="/" activeClassName="selected">
          <li className="selected">
            <FontAwesomeIcon icon={faTh} size="2x" />
          </li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
=======
        <NavLink to="/hours" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </li>
        </NavLink>
        <NavLink exact to="/category" activeClassName="selected">
          <li className="selected">
            <FontAwesomeIcon icon={faTh} size="2x" />
          </li>
        </NavLink>
        <NavLink to="/list" activeClassName="selected">
>>>>>>> alexandra_hour_reg
          <li>
            <FontAwesomeIcon icon={faList} size="2x" />
          </li>
        </NavLink>
      </ul>
    </nav>
  </div>
);