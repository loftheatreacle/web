import React from 'react';
import { NavLink } from 'react-router-dom';
class TextSideBar extends React.Component {
    render() {
        return (
            <div id="sidebargridwrapper">
                <div id="sidebarwrapper">
                    <NavLink to="/art" className="textsidebarlinks">
                        <span>
                            Art
                        </span>
                        
                    </NavLink>
                    <NavLink to="/code" className="textsidebarlinks">
                    <span>
                            Code
                        </span>
                    </NavLink>
                    <NavLink to="/contact" className="textsidebarlinks">
                    <span>
                            Contact
                        </span>
                    </NavLink>
                    <NavLink to="/aboutme" className="textsidebarlinks">
                    <span>
                            About Me
                        </span>
                    </NavLink>
                    <NavLink to="/building" className="textsidebarlinks">
                    <span>
                            Currently Building
                        </span>
                    </NavLink>
                </div>
                
            </div>
        );
    }
}
export default TextSideBar;