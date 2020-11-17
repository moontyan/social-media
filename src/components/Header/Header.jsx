import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <header className="main-header">
            <div className="logo">ChatNow</div>
            <div className="header-links">
                <div className="login-link">
                    {props.isAuth ? 
                    <div>{props.login} 
                        <button onClick={props.logOut} className="log-out-btn">
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                        </button>
                    </div> : <NavLink to={'/login'}>Login</NavLink> }
                </div>
            </div> 
      </header>
    )
}

export default Header;