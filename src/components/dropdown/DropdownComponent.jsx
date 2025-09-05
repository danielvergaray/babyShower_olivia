import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownComponent = ({ menuOptions, menuSelected, setMenuSelected }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {menuSelected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {menuOptions.map((option, index) => (
          <Dropdown.Item onClick={() => setMenuSelected(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
