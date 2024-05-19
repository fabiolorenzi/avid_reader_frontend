import React from "react";
import {NavLink} from "react-router-dom";
import {GiBookshelf} from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import {GoGear} from "react-icons/go";
import "./NavigationBar.css";

function NavigationBar() {

    // The following function is to get the right className for
    // active and not active NavLink
    function getRightClass(target: string): string {
        const pathname: string = window.location.pathname;
        return target.includes(pathname) ? "navigationBar_active" : "navigationBar_notActive";
    };

    return(
        <div className="navigationBar_container">
            <div>
                <NavLink
                    to="/dashboard"
                    className={getRightClass("/dashboard")}
                >
                    <GiBookshelf />
                    <div className="space_line"></div>
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={getRightClass("/favorites")}
                >
                    <FaRegHeart />
                    <div className="space_line"></div>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={getRightClass("/settings")}
                >
                    <GoGear />
                    <div className="space_line"></div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavigationBar;