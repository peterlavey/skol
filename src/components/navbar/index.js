import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = ()=> {
    const [collapse, setCollapse] = useState(false);
    const style = {backgroundColor: '#000'};

    return(
        <Router>
            <header>
                <MDBNavbar style={style} dark expand="md" scrolling fixed="top">
                    <MDBNavbarBrand href="/">
                        <strong>Skol</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={()=> setCollapse(!collapse)} />
                    <MDBCollapse isOpen = {collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="#">Inicio</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Cervecerías</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Tipos</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Configuraciones</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
        </Router>
    );
};

export default Navbar;