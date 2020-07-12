import React,{useState} from "react";
import {
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavLink,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
}from "reactstrap";


const NavigationBar:React.FC=()=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <Navbar color="dark" dark>
            <NavbarBrand>
                Codeforces Problems
            </NavbarBrand>
            <NavbarToggler onClick={():void=>{setIsOpen(!isOpen)}}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            more
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem
                                tag="a"
                                href="https://codeforces.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Codeforces
                            </DropdownItem>

                            <DropdownItem
                                tag="a"
                                href="https://revuestarlight.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                uku
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default NavigationBar;