import React from "react";
import "./Header.scss";

import userIcon from "../media/user_icon.png";

function Header() {
    return (
        <div className="header_container">
            <div className="header_left">
                <img src={userIcon} alt="user icon" />
            </div>
            <div className="header_right">
                <h1>RAD<span>ICAL</span></h1>
            </div>
        </div>
    );
};

export default Header;