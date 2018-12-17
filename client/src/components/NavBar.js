import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      currentTime: new Date().toLocaleTimeString()
    };
  }
  componentDidMount(){
      this.interval = setInterval(() => {
          this.setState({currentTime: new Date().toLocaleTimeString()})
      }, 1000);
  }
  componentWillUnmount(){
      clearInterval(this.interval);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="navbargridwrapper">
      <div id="navbarwrapper">
        <Navbar id="navbar" expand="md">
          <NavbarBrand id="navbarbrand" href="/">TREACLE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="navbardropdown" className="ml-auto" navbar>
                <NavItem>
                    <p id="navbartime">
                        {this.state.currentTime}
                    </p>
                </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
    );
  }
}