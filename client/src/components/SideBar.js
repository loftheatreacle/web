import React from 'react';
import { NavLink } from 'react-router-dom';
class SideBar extends React.Component {
    render() {
        return (
            <div id="sidebargridwrapper">
                <div id="sidebarwrapper">
                    <NavLink to="/art" className="sidebarlinks">
                    </NavLink>
                    <NavLink to="/code" className="sidebarlinks">
                    </NavLink>
                    <NavLink to="/contact" className="sidebarlinks">
                    </NavLink>
                    <NavLink to="/aboutme" className="sidebarlinks">
                    </NavLink>
                    <NavLink to="/building" className="sidebarlinks">
                    </NavLink>
                </div>
                
            </div>
        );
    }
}
export default SideBar;