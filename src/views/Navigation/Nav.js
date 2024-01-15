import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/todo"  >Todo </NavLink>
                </div>
            </div>
        )
    }
}
export default Nav;