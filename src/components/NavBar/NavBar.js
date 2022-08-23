import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import favicon from './img/favicon.png' 
import{ Anchor } from 'antd'
import "./NavBar.css"

const { Link } = Anchor;
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/"> <img src={favicon} alt="favicon.png" /> LABRSS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Anchor>
                  <Link href="/" title="Home"/>
                </Anchor>
              </NavItem>
              <NavItem>
                <Anchor>
                  <Link href="#projetos" title="Projetos"/>
                </Anchor>
              </NavItem>
              <NavItem>
                <Anchor>
                  <Link href="#equipe" title="Integrantes"/>
                </Anchor>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar