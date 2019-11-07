import React from "react";
import DropdownMenu from './Dropdown'

export default ({ close }) => (
  <div className="modal">
    <div className="header"> Choose Coworker</div>
    <div className="dropdown">
        <DropdownMenu />
    </div>
    <button className="close" onClick={close}>Save</button>
  </div>
);
