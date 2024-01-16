import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/ListTodo"  >Todo </NavLink>
                    <NavLink to="/User" end >List user </NavLink>
                    <NavLink to="/User/:id"  >Detail user </NavLink>
                </div>
            </div>
        )
    }
}
export default Nav;