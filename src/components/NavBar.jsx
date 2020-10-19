import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import Logo1 from "../Assets/Artboard 3.png";

//1012px max width for this component

const Navbar = () => {
  return (
    <MDBNavbar color="#1c2a48 mdb-color darken-3" dark expand="md" fixed="top">
      <MDBNavbarBrand href="/" className="ml-5">
        <img src={Logo1} alt="" height="100" />
      </MDBNavbarBrand>
      <MDBNavbarNav className="web" right>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/portfolio">
            <h5 className="navbarLink1"> Portfolio</h5>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/store">
            <h5 className="navbarLink1">Store</h5>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/about">
            <h5 className="navbarLink1">About</h5>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/contact">
            <h5 className="navbarLink1">Contact</h5>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/cart">
            <MDBIcon icon="shopping-cart" className="navbarLink2" size="lg" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="icon-link" to="/search">
            <MDBIcon icon="search" className="navbarLink2" size="lg" />
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
