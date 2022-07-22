import React, { useState } from "react";
import {
  Dropdown,
  FeaturesDropdown,
  NavItem,
  NavLink,
  NavMenu,
} from "../styles/components/NavLinksStyle";
import arrow_up from "../images/icon-arrow-up.svg";
import arrow_down from "../images/icon-arrow-down.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

export default function NavLinks() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <>
      <NavMenu>
        <NavItem>
          <Dropdown onClick={() => setToggle1(!toggle1)}>
            features
            <img src={toggle1 ? arrow_up : arrow_down} alt="arrow"></img>
          </Dropdown>
          <FeaturesDropdown className={toggle1 ? "show right" : "right"}>
            <ul>
              <li>
                <img src={todo} alt="dropdown-icon" />
                todo list
              </li>
              <li>
                <img src={calendar} alt="dropdown-icon" />
                calendar
              </li>
              <li>
                <img src={reminder} alt="dropdown-icon" />
                reminders
              </li>
              <li>
                <img src={planning} alt="dropdown-icon" />
                planning
              </li>
            </ul>
          </FeaturesDropdown>
        </NavItem>
        <NavItem>
          <Dropdown onClick={() => setToggle2(!toggle2)}>
            company
            <img src={toggle2 ? arrow_up : arrow_down} alt="arrow"></img>
          </Dropdown>
          <FeaturesDropdown className={toggle2 ? "show left" : "left"}>
            <ul>
              <li>history</li>
              <li>our team</li>
              <li>blog</li>
            </ul>
          </FeaturesDropdown>
        </NavItem>
        {["careers", "about"].map((item) => (
          <NavItem key={item}>
            <NavLink href={`#${item}`}>{item}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </>
  );
}
