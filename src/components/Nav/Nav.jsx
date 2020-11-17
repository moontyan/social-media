import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className="nav-links">
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <NavLink to="/dialogs">Messages</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faCommentAlt} />
            <a href="#">News</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMusic} />
            <a href="#">Music</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} />
            <NavLink to="/users">Find Users</NavLink>
          </li>
        </ul>
    </nav>
    )
}

export default Nav;