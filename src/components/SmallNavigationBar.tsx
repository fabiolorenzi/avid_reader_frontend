import React from "react";
import {NavLink} from "react-router-dom";
import {GiBookshelf} from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import {GoGear} from "react-icons/go";
import "./SmallNavigationBar.css";

function SmallNavigationBar() {

    // The following function is to get the right className for
    // active and not active NavLink
    function getRightClass(target: string): string {
        const pathname: string = window.location.pathname;
        return target.includes(pathname) || (target === "/favorites" && pathname.includes("edit"))
            ? "navigationBar_active" : "navigationBar_notActive";
    };

    return(
        <div className="smallNavigationBar_container">
            <NavLink
                to="/dashboard"
                className={getRightClass("/dashboard")}
            >
                <GiBookshelf />
            </NavLink>
            <NavLink
                to="/favorites"
                className={getRightClass("/favorites")}
            >
                <FaRegHeart />
            </NavLink>
            <NavLink
                to="/settings"
                className={getRightClass("/settings")}
            >
                <GoGear />
            </NavLink>
        </div>
    );
};

export default SmallNavigationBar;