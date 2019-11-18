import React from 'react';
import { NavLink } from 'react-router-dom';

import { faClock, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabbedBar = () => (
  <div className="bottom-toolbar">
    <nav>
      <ul>
        <NavLink to="/hours" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </li>
        </NavLink>
        <NavLink exact to="/materials" activeClassName="selected">
          <li className="selected">
            <FontAwesomeIcon icon={faTh} size="2x" />
          </li>
        </NavLink>
        <NavLink to="/list" activeClassName="selected">
          <li>
            <FontAwesomeIcon icon={faList} size="2x" />
          </li>
        </NavLink>
      </ul>
    </nav>
  </div>
);